/*  
 *    =============================================================================
 *          ImageSearch.js 
 *                  - Allows users to search for properties by uploading an image.
 *
 *          Purpose
 *                  - This component provides an interface for image-based property search.
 *                  - Users can upload an image, select a model, and view similar property listings.
 *
 *         Main Responsibilities:
 *                  - Handles image uploads and stores the selected image.
 *                  - Allows users to select a deep learning model for the search.
 *                  - Sends the image and selected model to the backend API for processing.
 *                  - Displays search results, including property titles fetched from metadata.csv.
 *                     - Uses `papaparse` to parse the CSV data.
 *                  - Provides a loading indicator and error handling.
 *                     - Includes a "View Details" overlay on image hover.
 *
 *          Styling
 *                  - Custom CSS (`ImageSearch.css`) is used for styling.
 *
 *          Dependencies
 *                  - `react-router-dom` for navigation (`Link`).
 *                  - `react-icons` for icons (`ImSpinner2`).
 *                  - `papaparse` for CSV parsing.
 *
 *          API Endpoint
 *                  - `http://127.0.0.1:5000/api/search-by-image`
 *
 *          Author: Eliana Ojeda
 *          Date: December 2, 2024
 *          Revised: January 30, 2025
 *  
 *    =============================================================================
 */

import React, { useState, useEffect } from "react";
// ... rest of your code


import React, { useState, useEffect } from "react";
import '../css/ImageSearch.css';
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im"; // Import spinner icon
import Papa from 'papaparse'; // Import PapaParse for CSV parsing

const ImageSearch = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [results, setResults] = useState([]);
  const [selectedModel, setSelectedModel] = useState('simclr');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [metadata, setMetadata] = useState([]); // State to store metadata from CSV

  // Fetch and parse metadata.csv on component mount
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch('/metadata.csv'); // Fetch the CSV file
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csvData = decoder.decode(result.value); // Decode the CSV content

        // Parse the CSV data
        Papa.parse(csvData, {
          header: true,
          complete: (results) => {
            setMetadata(results.data); // Store parsed metadata in state
          },
          error: (error) => {
            console.error("Error parsing metadata.csv:", error);
          },
        });
      } catch (err) {
        console.error("Failed to load metadata.csv:", err);
      }
    };

    fetchMetadata();
  }, []);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  // Handle model change
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  // Handle image search
  const handleSearch = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError(null);
    setResults([]);

    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("model", selectedModel);

    try {
      const response = await fetch('http://127.0.0.1:5000/api/search-by-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const resultData = await response.json();
      console.log("Search results from backend:", resultData);

      // Map titles from metadata to the search results
      const resultsWithTitles = resultData.similarImages.map((image) => {
        const matchingListing = metadata.find((listing) => {
          const imagePaths = listing.image_paths
            .split(',')
            .map((path) => path.trim().replace(/\\/g, '/').split('/').pop());
          return imagePaths.includes(image.url);
        });

        return {
          ...image,
          title: matchingListing ? matchingListing.title : "Untitled", // Add title if found
        };
      });

      setResults(resultsWithTitles); // Update results with titles
    } catch (error) {
      console.error("Error searching by image:", error);
      setError("An error occurred while searching.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-search-container p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Search Properties by Image</h1>

      {/* Model selection dropdown */}
      <label htmlFor="model-select" className="block mb-2">Choose a model:</label>
      <select 
        id="model-select" 
        value={selectedModel} 
        onChange={handleModelChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="simclr">SimCLR</option>
        <option value="deit">DeiT</option>
        <option value="clip">CLIP</option>
        <option value="base_cnn">Base CNN</option>
        <option value="combined">Combined (SimCLR, DeiT, CLIP)</option>
      </select>

      {/* Image upload section */}
      <div className="flex flex-col items-center mb-4">
        <input 
          type="file" 
          onChange={handleImageUpload} 
          accept="image/*" 
          className="mb-4"
        />
        
        {selectedImage && (
          <div className="mb-4">
            <h2 className="text-lg mb-2">Uploaded Image:</h2>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Uploaded"
              className="max-w-xs h-auto border border-gray-300 rounded-md shadow-lg"
            />
          </div>
        )}

        <button 
          onClick={handleSearch} 
          className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition duration-200"
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <div className="flex items-center">
              <ImSpinner2 className="animate-spin mr-2" /> Searching...
            </div>
          ) : (
            "Search by Image"
          )}
        </button>
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="text-center mt-4">
          <p className="text-lg mb-4">Searching for similar images...</p>
            <div className="loading-line"></div>
        </div>
      )}

      {/* Error message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Display "Top 5 Similar Images" heading if results are found */}
      {results.length > 0 && !loading && !error && (
        <>
          <hr className="my-4 border-t-2 border-gray-300" />
          <h2 className="text-2xl font-semibold text-center mt-4 mb-4">Top 5 Similar Properties</h2>
        </>
      )}

      {/* Search results */}
      <div className="results-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {results.map((image, index) => (
          <Link
            key={index}
            to={`/listing-detail-by-image/${encodeURIComponent(image.url.split('/').pop())}`}
            className="relative border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredImageIndex(index)} // Track hovered image
            onMouseLeave={() => setHoveredImageIndex(null)} // Reset hover state
          >
            <img
              src={`http://127.0.0.1:5000/images/${image.url}`}
              alt={`Similar result ${index}`}
              className="w-full h-80 object-cover rounded-t-lg"
            />

            {/* "View Details" Text */}
            {hoveredImageIndex !== index && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4 text-white text-sm font-semibold rounded-b-lg">
                View Details
              </div>
            )}

            {/* Fading Box with Title */}
            {hoveredImageIndex === index && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 transition-opacity duration-300">
                {/* Title */}
                <p className="text-white text-lg font-semibold text-center mb-2">
                  {image.title || "Untitled"} {/* Display the image title */}
                </p>
                
                {/* "View Details" Box */}
                <div className="bg-violet-600 text-white text-sm font-semibold px-4 py-2 rounded-md cursor-pointer">
                  View Listing
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* No results message */}
      {!loading && results.length === 0 && !error && (
        <p className="text-center text-gray-500 mt-4">Upload an image to start the search.</p>
      )}
    </div>
  );
};

export default ImageSearch;