// src/components/HouseList.js

import React, { useContext, useState, useEffect } from 'react';
import { HouseContext } from "./HouseContext";
import House from "./House";
import { ImSpinner2 } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";

const HouseList = () => {
    const { houses, loading } = useContext(HouseContext);
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const initialPage = parseInt(queryParams.get("page")) || 1;

    const [currentPage, setCurrentPage] = useState(initialPage);
    const housesPerPage = 9;

    const totalPages = Math.ceil(houses.length / housesPerPage);
    const indexOfLastHouse = currentPage * housesPerPage;
    const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
    const currentHouses = houses.slice(indexOfFirstHouse, indexOfLastHouse);

    useEffect(() => {
        navigate(`?page=${currentPage}`);
    }, [currentPage, navigate]);

    if (loading) {
        return (
            <ImSpinner2 className='mx-auto animate-spin text-4xl text-violet-700 font-bold mt-[200px]' />
        );
    }

    if (currentHouses.length < 1) {
        return <div>Sorry, no match found!</div>;
    }

    return (
        <section className='mt-36 mb-10'>
            <div className="container mx-auto max-w-[1200px]">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-20'>
                    {currentHouses.map((house, index) => {
                        const absoluteIndex = indexOfFirstHouse + index; 
                        return (
                            <House key={absoluteIndex} house={house} index={absoluteIndex} />
                        );
                    })}
                </div>

                {/* Pagination Controls */}
                <div className="pagination flex justify-center mt-12">
                    <button
                        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                        aria-label="Previous page"
                        className="mx-2 bg-violet-600 text-white px-4 py-2 rounded-lg"
                    >
                        Previous
                    </button>
                    <span>{` Page ${currentPage} of ${totalPages} `}</span>
                    <button
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage === totalPages}
                        aria-label="Next page"
                        className="mx-2 bg-violet-600 text-white px-4 py-2 rounded-lg"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HouseList;
