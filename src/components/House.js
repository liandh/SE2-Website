/*
 * =============================================================================
 * House.js
 * - Displays a card representing a single property listing.
 *
 * Purpose
 * - This component renders a card-like representation of a house or property, 
 *   including its image, title, location, and price. It's designed to be used within
 *   a list or grid to display multiple properties.
 *
 * Functionality
 * - Receives property data as a prop (`house`).
 * - Truncates long titles for display.
 * - Splits comma-separated image paths into an array.
 * - Implements image pagination to display a limited number of images at a time.
 * - Renders the property card with a link to the detailed listing page.
 * - Includes a "favorite" icon.
 * - Handles image loading errors by displaying a placeholder image.
 *
 * Styling
 * - Uses custom CSS from `Property.css`.
 *
 * Dependencies
 * - React, useState
 * - react-icons (RiHeart3Line)
 * - react-router-dom (Link)
 *
 * Props
 * - `house`: An object containing the property details (image_paths, title, price, location, post_url).
 * - `index`: The index of the house in the list (used for linking to the detail page).
 *
 *  Author: Alleina Abad
 *  Date: November 16, 2024 
 *  Revised: January 30, 2025
 *
 * =============================================================================
 */s

import React, { useState } from 'react';
import "../css/Property.css";
import { RiHeart3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const House = ({ house, index }) => { 
    const { image_paths, title, price, location, post_url } = house;

    // Function to truncate the title
    const truncateTitle = (title) => {
        const maxLength = 22; // Maximum length for the title
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...'; 
        }
        return title;
    };

    // Split the image_paths into an array
    const images = image_paths.split(',').map(path => path.trim());

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 3; // Number of images to show per page

    // Calculate total pages
    const totalPages = Math.ceil(images.length / imagesPerPage);

    // Get current images to display
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    return (
        <div className="w-[352px] h-[424px] relative">
            <Link to={`/listing/${index}`} className="house-link"> 
                <div className="Rectangle392 w-[352px] h-[424px] left-0 top-0 absolute bg-white rounded-lg border border-[#f0effb]">
                    <div className="image-container">
                        {currentImages.map((image, index) => (
                            <img
                                key={index}
                                className="Image"
                                src={`/${image}`} // Ensure correct path
                                alt={title}
                                onError={(e) => {
                                    e.target.onerror = null; // Prevents infinite loop
                                    e.target.src = 'path/to/placeholder/image.png';
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="Favorited">
                    <div className="Ellipse"></div>
                    <div className="Frame w-6 h-6 px-[3px] pt-[5px] pb-[3.64px] left-[12px] top-[12px] absolute justify-center items-center inline-flex">
                        <RiHeart3Line className='text-3xl hover:text-red-500' />
                    </div>
                </div>
                <h3 className="Title">{truncateTitle(title)}</h3>
                <h3 className="Address">{location}</h3>
                <h3 className="Price">{price}</h3>
            </Link>

        </div>
    );
}

export default House;