#flask_api\model.py

import torch
import torch.nn as nn
import os
import pickle
import numpy as np
from torchvision import transforms, models
from transformers import DeiTForImageClassification, CLIPModel, CLIPProcessor
from sklearn.metrics.pairwise import cosine_similarity
from PIL import Image

# Load SimCLR Model
class SimCLR(nn.Module):
    def __init__(self, base_model, out_dim):
        super(SimCLR, self).__init__()
        self.backbone = nn.Sequential(*list(base_model.children())[:-1])
        self.projection_head = nn.Sequential(
            nn.Linear(base_model.fc.in_features, 512),
            nn.ReLU(),
            nn.Linear(512, out_dim)
        )

    def forward(self, x):
        h = self.backbone(x).squeeze()
        z = self.projection_head(h)
        return h, z

def load_model(model_path, model):
    model.load_state_dict(torch.load(model_path, map_location=torch.device('cuda' if torch.cuda.is_available() else 'cpu')))
    model.eval()  # Set to evaluation mode
    return model

# Load models
def load_models():
    
    simclrmodel = r"D:\Downloads\eliana-portfolio\Real-Estate-Website\flask_api\models\simclr_model1.pth"
    simclr_model_instance = SimCLR(models.resnet50(weights='ResNet50_Weights.DEFAULT'), out_dim=128)
    simclr_model = load_model(simclrmodel, simclr_model_instance)

    deitmodel = r"D:\Downloads\eliana-portfolio\Real-Estate-Website\flask_api\models\deit_finetuned_improved.pth"
    deit_model = DeiTForImageClassification.from_pretrained('facebook/deit-base-distilled-patch16-224', num_labels=128)
    deit_model.load_state_dict(torch.load(deitmodel, map_location=torch.device('cpu')))

    # Load CLIP Model and Processor
    clip_model = CLIPModel.from_pretrained("openai/clip-vit-large-patch14")  # Load CLIP model
    clip_processor = CLIPProcessor.from_pretrained("openai/clip-vit-large-patch14")  # Load CLIP processor
    
    base_cnn_model = models.resnet18(weights='ResNet18_Weights.DEFAULT')  # Load default ResNet18
    base_cnn_model.eval()  # Set to evaluation mode

    return simclr_model, deit_model, clip_model, clip_processor, base_cnn_model  # Return clip_processor

# Image transform with data augmentation option
def get_image_transform(augment=False):
    if augment:
        return transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.RandomHorizontalFlip(),
            transforms.RandomRotation(15),
            transforms.ColorJitter(brightness=0.1, contrast=0.1, saturation=0.1),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
        ])
    else:
        return transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
        ])

# Feature extraction functions
def extract_features(model, processor, image, model_type, augment=False):
    with torch.no_grad():
        image_tensor = get_image_transform(augment)(image).unsqueeze(0)
        if model_type == 'simclr':
            return model(image_tensor)[1]  # Projection head output
        elif model_type == 'deit':
            inputs = {"pixel_values": image_tensor}
            outputs = model(**inputs)
            return outputs.logits
        elif model_type == 'clip':
            clip_inputs = processor(images=image, return_tensors="pt")
            image_features = model.get_image_features(**clip_inputs)
            return image_features.cpu().numpy().reshape(1, -1)
        elif model_type == 'base_cnn':
            return model(image_tensor).detach().cpu().numpy()

# Load and save features
def load_features(filename):
    if os.path.exists(filename):
        with open(filename, 'rb') as f:
            features = pickle.load(f)
        print(f"Loaded features from {filename}.")
        return features
    return {}

def save_features_to_file(features, filename):
    with open(filename, 'wb') as f:
        pickle.dump(features, f)
    print(f"Features saved to {filename}.")

# Find most similar images
def find_most_similar_image(uploaded_features, dataset_features):
    # Ensure dataset_features is not empty
    if not dataset_features:
        raise ValueError("Dataset features are empty. Cannot compute similarities.")
    
    uploaded_features = uploaded_features.reshape(1, -1)  # Ensure shape is [1, feature_dim]
    
    # Flatten the features and ensure tensors are converted to NumPy arrays
    dataset_features_array = np.array([feat.detach().cpu().numpy().flatten() if isinstance(feat, torch.Tensor) else np.array(feat).flatten() 
                                      for feat in dataset_features.values()])  # Flatten all feature vectors

    # Check if dataset_features_array is empty
    if dataset_features_array.size == 0:
        raise ValueError("Dataset features array is empty. Cannot compute similarities.")
    
    # Compute Cosine similarities
    similarities_cosine = cosine_similarity(uploaded_features, dataset_features_array)

    # Normalize similarities to be within [0, 1] if they exceed this range
    similarities_cosine = np.clip(similarities_cosine, 0, 1)

    most_similar = sorted(zip(dataset_features.keys(), similarities_cosine[0]),
                          key=lambda item: item[1], reverse=True)

    return most_similar

# Load dataset features
def load_dataset_features(image_folder, model, model_type, feature_file, augment=False):
    features = load_features(feature_file)
    if features:
        return features  # Skip extraction if features are already loaded

    features = {}
    img_files = [f for f in os.listdir(image_folder) if f.lower().endswith(('.jpg', '.png'))]

    print(f"Loading features for {len(img_files)} images...")
    
    for img_file in img_files:
        img_path = os.path.join(image_folder, img_file)
        image = Image.open(img_path).convert("RGB")
        # Pass the correct model_type argument here
        feature = extract_features(model, None, image, model_type, augment=augment)
        features[img_path] = feature

    save_features_to_file(features, feature_file)
    return features

# Combining results from SimCLR, DeiT, and CLIP for better accuracy
def combine_similarities(simclr_results, deit_results, clip_results, weights=[0.3, 0.4, 0.4]):
    combined_results = {}
    
    for img_path, sim_score in simclr_results:
        combined_results[img_path] = weights[0] * sim_score
    
    for img_path, sim_score in deit_results:
        if img_path in combined_results:
            combined_results[img_path] += weights[1] * sim_score
        else:
            combined_results[img_path] = weights[1] * sim_score
    
    for img_path, sim_score in clip_results:
        if img_path in combined_results:
            combined_results[img_path] += weights[2] * sim_score
        else:
            combined_results[img_path] = weights[2] * sim_score

    # Sort based on the combined score
    sorted_combined = sorted(combined_results.items(), key=lambda x: x[1], reverse=True)
    return sorted_combined
