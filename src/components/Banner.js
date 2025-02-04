/*
 *  =============================================================================
 *  Banner.js
 *  - Displays a hero banner with a welcome message, search bar, and image search option.
 *
 *  Purpose
 *  - This component renders the main banner section of the website, typically at the top of the page.
 *  - It includes a background image, a welcoming message, a search bar for property searches, and a camera icon that navigates to the image search page.
 *
 *  Functionality
 *  - Manages the search term state using `useState`.
 *  - Accesses the global search handler function (`handleSearch`) from the `HouseContext`.
 *  - Triggers the search functionality whenever the input in the search bar changes.
 *  - Handles navigation to the image search page when the camera icon is clicked.
 *  - Includes a `Search` component (presumably for advanced search options).
 *
 *  Styling
 *  - Uses Tailwind CSS classes for styling.
 *
 *  Dependencies
 *  - React, useState, useContext
 *  - react-router-dom (useNavigate)
 *  - react-icons (FaCamera)
 *  - ./HouseContext (HouseContext)
 *  - ./Search (Search component)
 *
 *  Author: Eliana Ojeda
 *  Date: January 28, 2025
 *  Revised: January 30, 2025
 *
 *  =============================================================================
 */

import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { FaCamera } from "react-icons/fa";
import { HouseContext } from './HouseContext'; // Import HouseContext to access handleSearch
import Search from "./Search";

const Banner = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { handleSearch } = useContext(HouseContext); // Use context to access the search handler
    const navigate = useNavigate();

    // Handle the input change and trigger search
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value); // Trigger search whenever the input changes
    };

    const handleCameraClick = () => {
        navigate('/image-search');
    };

    return (
        <section className="h-full mb-8 xl:mb-8">
            <div className={`banner-container relative w-full md:h-[645px] sm:h-[600px] rounded-xl bg-cover bg-center`}>
                <img 
                    data-layer="Banner Image" 
                    className="BannerImage w-[90%] max-h-[95%] sm:h-[600px] rounded-xl mx-auto object-cover" 
                    src="/Banner-Image.png" 
                    alt="Banner" 
                />
                <div className="absolute inset-0"></div> {/* Optional Overlay */}
                <div data-layer="Headline" className="absolute inset-0 flex flex-col justify-center items-start gap-8 text-white mx-[10%] w-[30%]"> {/* items-start for left alignment */}
                    <div data-layer="Buy, rent, or sell your property easily" className="md:text-6xl sm:text-4xl font-bold font-['Plus Jakarta Sans'] text-[#000828]">
                        Buy, rent, or sell your property easily
                    </div>
                    <div data-layer="A great platform to buy, sell, or even rent your properties without any commisions." className="text-[#000828] md:text-2xl sm:text-md font-medium font-['Plus Jakarta Sans'] leading-loose">
                        A great platform to buy, sell, or even rent your properties without any commisions.
                    </div>
                </div>
                {/* Search Box Overlay */}
                {/* absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full px-4 */}
                <div className="">
                    <div className="flex items-center rounded-lg overflow-hidden w-full max-w-[620px] bg-black bg-opacity-70 p-2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleInputChange}  // Call handleInputChange on input
                            placeholder="Type to search..."
                            className="flex-grow px-4 py-2 outline-none border-none bg-transparent text-white"
                        />
                        <button 
                            onClick={handleCameraClick}
                            className="bg-violet-500 p-2 rounded-lg mr-1"
                        >
                            <FaCamera className="text-white" />
                        </button>
                    </div>
                </div>
            </div>

            <Search />
        </section>
    );
};

export default Banner;
