/*
 * =============================================================================
 * ListingDetail.js
 * - Displays detailed information for a single property listing.
 *
 * Purpose
 * - This component fetches and displays details of a specific property, including images, title, price, location, and a link to the Facebook post.
 * - It also provides image navigation through a carousel.
 *
 * Functionality
 * - Retrieves the property ID from the URL parameters using `useParams`.
 * - Accesses the list of properties from the `HouseContext` using `useContext`.
 * - Finds the specific property based on the ID.
 * - Manages the current image index for the carousel using `useState`.
 * - Implements image navigation (next/previous).
 * - Provides a "Back to Listings" link and a "View on Facebook" link.
 *
 * Styling
 * - Uses custom CSS (ListingDetail.css) and Tailwind CSS for styling.
 *
 * Dependencies
 * - React, { useContext, useState }
 * - react-router-dom, { useParams, Link, useLocation }
 * - ./HouseContext, { HouseContext }
 * - ../css/ListingDetail.css
 * - react-icons, { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaTag }
 *
 *  Author: Eliana Ojeda
 *  Date: December 1, 2024 
 *  Revised: January 30, 2025
 *
 * =============================================================================
 */

import React, { useContext, useState } from 'react';
import { HouseContext } from './HouseContext';
import { useParams, Link, useLocation } from 'react-router-dom';
import "../css/ListingDetail.css";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const ListingDetail = () => {
    const { houses } = useContext(HouseContext);
    const { id } = useParams();
    const location = useLocation();

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const listing = houses.find((house, index) => index.toString() === id);

    if (!listing) {
        return <div className="text-center text-red-600 text-2xl mt-10">Listing not found!</div>;
    }

    const { image_paths, title, price, post_url, location: houseLocation } = listing;
    const images = image_paths.split(',').map(path => path.trim());

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="listing-detail-container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg mt-10">
            {/* Button Container */}
            <div className="flex justify-between mb-6">
                {/* Back Button */}
                <Link
                    to={`/?${location.search}`}
                    className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-all duration-300"
                >
                    <FaArrowLeft className="inline mr-2" /> Back to Listings
                </Link>

                {/* Facebook Link */}
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
                {/* Price */}
                <p className="text-lg text-green-600 font-bold">{price}</p>
                {/* Location */}
                <p className="text-lg text-violet-600 font-bold flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> {houseLocation}
                </p>
            </div>

            {/* Image Carousel */}
            <div className="carousel-container relative mb-6">
                <img
                    src={`/${images[currentImageIndex]}`}
                    alt={`Listing Image ${currentImageIndex + 1}`}
                    className="full-image w-full h-auto rounded-lg shadow-md"
                />

                {/* Carousel Navigation Buttons */}
                <button
                    onClick={handlePrevImage}
                    className="arrow-button left-arrow absolute top-1/2 left-4 transform -translate-y-1/2 bg-violet-600 text-white p-3 rounded-full shadow-md hover:bg-violet-700 transition-all duration-300"
                >
                    <FaArrowLeft size={24} />
                </button>
                <button
                    onClick={handleNextImage}
                    className="arrow-button right-arrow absolute top-1/2 right-4 transform -translate-y-1/2 bg-violet-600 text-white p-3 rounded-full shadow-md hover:bg-violet-700 transition-all duration-300"
                >
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default ListingDetail;
