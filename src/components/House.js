// src/components/House.js

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