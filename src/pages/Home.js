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

import React from "react";

import Banner from "../components/Banner"; 
import HouseList from "../components/HouseList";

const Home = () => {
    return(
        <div className="min-h-[1800px] ">
            <Banner/> 
            <HouseList/>
        </div>
    )
}

export default Home;