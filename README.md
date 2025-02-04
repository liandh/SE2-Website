# 91Acres Property Listing Application

This project is a web application for browsing and searching property listings. It uses React with Tailwind CSS for the frontend and Flask for the backend API.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Image Search](#image-search)
- [Property Details (Metadata)](#property-details-metadata)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This application allows users to view and search property listings using filters, keyword search and image search. The frontend provides a user-friendly interface for browsing properties, while the backend flask API handles image search functionality.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js and npm (or yarn):**  For the React frontend.  Download from [nodejs.org](nodejs.org).
- **Python:** For the Flask backend. Download from [python.org](python.org).
- **pip (Python package installer):** Usually included with Python.
- **Git:** For cloning the repository. Download from [git-scm.com](git-scm.com).

## Setup

1. **Clone the repository:**

   ```bash
   git clone [repository_url]
   cd 91Acres  // Navigate to the project directory
   ```

2. **Place Images and Metadata in Public Folder:**

   * **Images:** Before installing any dependencies, place the image files you want to use for the image search in the `public/images` folder. Create the `images` folder inside `public` if it doesn't exist.
   * **Metadata:** Place the `metadata.csv` file containing the property details in the `public` folder.

3. **Create a virtual environment (recommended):**

   ```bash
   python -m venv venv   // Create a virtual environment
   source venv/bin/activate  // Activate the virtual environment (Linux/macOS)
   venv\Scripts\activate  // Activate the virtual environment (Windows)
   ```

4. **Install Python dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

5. **Install React dependencies:**

   ```bash
   npm install  // Or yarn install
   ```

## Running the Application

1. Start the React development server:

   ```bash
   npm start  // Or yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000` (or the port your React app is running on).

## Image Search

The image search functionality uses the images you placed in the `public/images` folder.  Make sure the filenames in the `metadata.csv` file match the names of the image files.

## Property Details (Metadata)

Property details are loaded from the `metadata.csv` file you placed in the `public` folder.  The structure of the `metadata.csv` file should be as follows (comma-separated values):

```csv
image_paths,title,price,location,post_url
image1.jpg,Cozy Apartment,$1500,New York,apartment1.com
image2.jpg,Luxury Villa,$5000,Los Angeles,villa1.com
image3.jpg,Charming Cottage,$2000,London,cottage1.com
...
```

- `image_paths`: The filename of the image (e.g., `image1.jpg`).  This should match the name of the image file in the `public/images` folder.
- `title`: The title of the property.
- `price`: The price of the property.
- `location`: The location of the property.
- `post_url`: The URL of the detailed listing page (can be left empty).

## Project Structure

```
91Acres/
├── app.py        // Flask backend application
├── requirements.txt // Backend dependencies
├── venv/         // Python virtual environment (if created)
├── public/       // Static assets (images and metadata.csv)
│   └── images/   // Folder for property images
│   └── metadata.csv  // CSV file with property details
├── frontend/
│   ├── src/      // React source code
│   │   └── ...
│   ├── public/   // React public folder
│   │   └── index.html
│   ├── package.json   // Frontend dependencies
│   └── ...
└── ...            // Other project files
```

## Contributing

Contributions are welcome!  Please open an issue or submit a pull request.
