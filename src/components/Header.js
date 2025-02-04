/*
 *  =============================================================================
 *  Header.js
 *  - Renders the header section of the website, including navigation links.
 *
 *  Purpose
 *  - This component displays the website's header, containing the logo and navigation links to different pages (Home, Sell, Resources, About Us).
 *  - It dynamically styles the navigation links based on the current route using `NavLink` and `useLocation` from `react-router-dom`.
 *
 *  Functionality
 *  - Uses `NavLink` components for navigation, providing active link styling.
 *  - Employs `useLocation` to access the current route and apply specific styles to the "Home" link and other navigation links.
 *  - Styles the "Home" link differently depending on whether it's the active link, or if the user is on the Sell, Resources, or About Us pages, or on any other page.
 *  - Styles other navigation links (Sell, Resources, About Us) based on their active state.
 *
 *  Styling
 *  - Uses Tailwind CSS classes for styling.
 *
 *  Dependencies
 *  - React
 *  - react-router-dom (NavLink, useLocation)
 *
 *  Author: Alleina Abad
 *  Date: November 16, 2024 
 *  Revised: January 30, 2025
 *
 *  =============================================================================
 */


import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink and useLocation

const Header = () => {
    const location = useLocation();  // Get the current path

    // Logic to determine the styling of the Home link
    const isHomePage = location.pathname === "/";
    const isOnOtherPages = ["/sell", "/resources", "/about-us"].includes(location.pathname);

    return (
        <header className="py-6 mb-0 border-b">
            <div className="container bg-opacity-70 mx-auto flex justify-between items-center font-bold text-gray-800">
                <div className="flex opacity-90 justify-between items-center gap-6">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) =>
                            isActive 
                                ? "text-violet-800 text-3xl font-bold transition" 
                                : "text-violet-600 hover:text-violet-700 text-3xl font-bold transition"
                        }
                    >
                        91acres
                    </NavLink>

                    {/* Home Link Styling Logic */}
                    <NavLink 
                        to="/" 
                        className={() => 
                            isHomePage
                                ? "px-4 py-3 bg-violet-700 text-white rounded-lg"  // Dark violet background for Home page
                                : isOnOtherPages
                                ? "px-4 py-3 text-black hover:bg-violet-300 hover:text-white rounded-lg"  // Black text for Sell, Resources, About Us
                                : "px-4 py-3 bg-violet-300 text-white rounded-lg"  // Light violet background for other pages
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="/sell" 
                        className={({ isActive }) => 
                            isActive ? "px-4 py-3 bg-violet-700 text-white rounded-lg" : "px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"
                        }
                    >
                        Sell
                    </NavLink>

                    <NavLink 
                        to="/resources" 
                        className={({ isActive }) => 
                            isActive ? "px-4 py-3 bg-violet-700 text-white rounded-lg" : "px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"
                        }
                    >
                        Resources
                    </NavLink>

                    <NavLink 
                        to="/about-us" 
                        className={({ isActive }) => 
                            isActive ? "px-4 py-3 bg-violet-700 text-white rounded-lg" : "px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"
                        }
                    >
                        About Us
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
