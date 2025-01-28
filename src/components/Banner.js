// src/components/Banner.js

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
        <section className="h-full max-h-[640px] mb-8 xl:mb-8">
            <div className="relative w-full h-[645px]">
                <img 
                    src="/violetbg4.JPG"
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-6xl font-bold leading-tight tracking-wide bg-gradient-to-l from-pink-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent" 
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        Welcome to 91acres
                    </h1>
                    <p className="text-2xl font-medium max-w-3xl mx-auto bg-gradient-to-r from-white to-white bg-clip-text text-transparent pl-10 lg:pl-20 xl:pl-40" 
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        Find your dream property today
                    </p>
                </div>
                {/* Search Box Overlay */}
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full px-4">
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
