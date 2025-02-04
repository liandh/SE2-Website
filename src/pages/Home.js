/*  
 *    =============================================================================
 *          Home.js 
 *                  - Displays the main landing page for the 91acres website.
 *
 *          Purpose
 *                  - This component renders the Home page, featuring a banner and a list of houses.
 * 
 *          Components
 *                  - Banner: Displays a promotional banner.
 *                  - HouseList: Renders a list of house listings.
 * 
 *          Styling
 *                  - Tailwind CSS is used for styling the elements.
 *
 *          Author: Alleina Abad
 *          Date: November 1, 2024
 *          Revised: January 30, 2025
 *  
 *    =============================================================================
 */

import React, { useState, useEffect } from "react";
import Banner from "../components/Banner"; 
import HouseList from "../components/HouseList";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { 
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-[1800px]">
      <Banner />
      <HouseList />
      
      {isScrolled && (
        <button 
            onClick={scrollToTop} 
            className="fixed bottom-12 right-5 p-3 bg-purple-400 hover:bg-purple-700 text-white rounded-md shadow-md transition-all duration-300">
            ↑ Back to Top
        </button>
      )}
    </div>
  );
};

export default Home;
