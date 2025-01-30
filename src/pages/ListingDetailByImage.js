/*  
 *    =============================================================================
 *          ListingDetailByImage.js 
 *                  - Displays details for a specific listing based on an image.
 *
 *          Purpose
 *                  - This component fetches listing data from a CSV file (`metadata.csv`) 
 *                    based on the provided image URL parameter and displays the details.
 * 
 *          Components
 *                - None directly, but uses data fetched from the CSV.
 * 
 *          Data Handling
 *                - Uses `papaparse` to parse the CSV data.
 *                - Stores listing data in component state.
 *
 *          Routing
 *                - Uses `react-router-dom`'s `useParams` to get the image URL from the route.
 *                - Uses `useNavigate` for programmatic navigation (Back to Search).
 *
 *          Styling
 *                - Custom CSS (`ListingDetail.css`) is used for styling.
 *
 *          Icons
 *                - React Icons (`FaArrowLeft`, `FaArrowRight`, `FaMapMarkerAlt`) are used.
 *
 *          Author: Eliana Ojeda
 *          Date: November 29, 2024
 *          Revised: January 30, 2025
 *  
 *    =============================================================================
 */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Papa from 'papaparse'; // Import PapaParse for CSV parsing
import "../css/ListingDetail.css";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'; // Added FaArrowRight import

const ListingDetailByImage = () => {
    const { imageUrl } = useParams(); // Get the image file name from the route parameters
    const [listing, setListing] = useState(null); // State to store the found listing
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [error, setError] = useState(null); // State for any errors
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Added state for image index
    const navigate = useNavigate(); // useNavigate hook to navigate programmatically

    const decodedImageFileName = decodeURIComponent(imageUrl).trim(); // Decode and trim the image file name
    const normalizedImageFileName = `images/${decodedImageFileName}`.replace(/\\/g, '/').trim(); // Add `images/` prefix and normalize

    useEffect(() => {
        // Function to load and parse the CSV
        const loadMetadata = async () => {
            try {
                console.log("Fetching metadata.csv...");

                const response = await fetch('/metadata.csv'); // Load the metadata.csv file
                const reader = response.body.getReader();
                const result = await reader.read(); // Read the content of the CSV
                const decoder = new TextDecoder('utf-8');
                const csvData = decoder.decode(result.value); // Decode the CSV content

                // Parse the CSV data
                Papa.parse(csvData, {
                    header: true, // Treat the first row as headers
                    complete: (results) => {
                        const listings = results.data;

                        // Find the listing where the image file matches
                        const foundListing = listings.find(listing => {
                            const imagePaths = listing.image_paths
                                .split(',')
                                .map(img => img.trim().replace(/\\/g, '/')); // Trim spaces and normalize paths

                            return imagePaths.includes(normalizedImageFileName);
                        });

                        if (foundListing) {
                            setListing(foundListing); // Set the found listing
                        } else {
                            setError("Listing not found!"); // Set error if no listing is found
                        }

                        setLoading(false); // Loading finished
                    },
                    error: (error) => {
                        setError("Error loading data.");
                        setLoading(false);
                    }
                });
            } catch (err) {
                setError("Failed to load metadata.");
                setLoading(false);
            }
        };

        loadMetadata(); // Load the metadata.csv on component mount
    }, [normalizedImageFileName]);

    if (loading) {
        return <div className="text-center text-gray-700 text-2xl mt-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600 text-2xl mt-10">{error}</div>;
    }

    if (!listing) {
        return <div className="text-center text-red-600 text-2xl mt-10">Listing not found!</div>;
    }

    // Extract listing details
    const { image_paths, title, price, post_url, location: houseLocation } = listing;
    const images = image_paths
        .split(',')
        .map(path => path.trim().replace(/\\/g, '/')); // Normalize paths

    const handleBackToSearch = () => {
        navigate(`/image-search?imageUrl=${encodeURIComponent(decodedImageFileName)}`);
    };

    // Handle thumbnail click
    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index); // Update the current image index
    };

    return (
        <div className="listing-detail-container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg mt-10">
            {/* Button Container */}
            <div className="flex justify-between mb-6">
                <button
                    onClick={handleBackToSearch}
                    className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-all duration-300"
                >
                    <FaArrowLeft className="inline mr-2" /> Back to Search
                </button>
                <a
                    href={post_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-all duration-300"
                >
                    View on Facebook
                </a>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold mb-0 text-gray-800">{title}</h2>

            {/* Horizontal Line */}
            <hr className="border-t-2 border-gray-300 mb-4" />

            {/* Location and Price Container */}
            <div className="flex justify-between items-center mb-4">
                <p className="text-lg text-green-600 font-bold">{price}</p>
                <p className="text-lg text-violet-600 font-bold flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> {houseLocation}
                </p>
            </div>

            {/* Image Carousel with Thumbnail Overlay */}
            <div className="relative mb-6">
                {/* Main Image */}
                <img
                    src={`http://127.0.0.1:5000/${images[currentImageIndex]}`}
                    alt={`Listing Image ${currentImageIndex + 1}`}
                    className="full-image w-full h-auto rounded-lg shadow-md"
                />

                {/* Thumbnails Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={`http://127.0.0.1:5000/${image}`}
                            alt={`Thumbnail ${index + 1}`}
                            className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${index === currentImageIndex ? 'border-violet-600 opacity-100' : 'border-transparent opacity-50'} hover:border-violet-600 hover:opacity-100 transition-all duration-300`}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>

                {/* Carousel Navigation Buttons */}
                <button
                    onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
                    className="arrow-button left-arrow absolute top-1/2 left-4 transform -translate-y-1/2 bg-violet-600 text-white p-3 rounded-full shadow-md hover:bg-violet-700 transition-all duration-300"
                >
                    <FaArrowLeft size={24} />
                </button>
                <button
                    onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)}
                    className="arrow-button right-arrow absolute top-1/2 right-4 transform -translate-y-1/2 bg-violet-600 text-white p-3 rounded-full shadow-md hover:bg-violet-700 transition-all duration-300"
                >
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default ListingDetailByImage;
