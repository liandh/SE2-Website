/*  
 *    =============================================================================
 *          Resources.js 
 *                  - Displays a page with helpful resources for real estate in the Philippines.
 *
 *          Purpose
 *                  - This component renders the Resources page, providing links and information
 *                    related to property listings, real estate guides, and useful websites.
 * 
 *          Sections
 *                  - Property Listings: Links to online listing platforms, local agents, and 
 *                    commercial property resources.
 *                  - Real Estate Guides: Links to guides on buying, selling, and investing.
 *                  - Helpful Links: Links to government resources, useful websites, location guides,
 *                    and developer resources.
 *
 *          Styling
 *                  - Tailwind CSS is used for styling the elements.
 * 
 *          Icons
 *                  - React Icons library provides icons for visual appeal.
 *
 *          Author: Eliana Ojeda
 *          Date: January 29, 2025
 *          Revised: January 30, 2025
 *  
 *    =============================================================================
 */

import React from "react";
import { FaSearch, FaMapMarkerAlt, FaBuilding, FaBookOpen, FaLink, FaHome, FaHandshake, FaChartLine } from "react-icons/fa";

const ResourcesPage = () => {


  return (


    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <header
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/violetbg2.JPG)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div className="container mx-auto text-center relative z-10 pt-32">
          <h1 className="text-6xl font-bold leading-tight tracking-wide bg-gradient-to-t from-pink-400 via-violet-500 to-blue-700 bg-clip-text text-transparent" 
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Resources
          </h1>
          <p className="mt-6 text-2xl font-medium max-w-6xl mx-auto bg-gradient-to-r from-white to-white bg-clip-text text-transparent" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Your ultimate guide to finding properties in the Philippines. Explore listings, real estate tips, and helpful links to make your search easier
          </p>
        </div>
      </header>



      {/* Property Listings Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">Property Listings</h2>
          <p className="text-lg font-light mb-12">
            Discover the best property listings across the Philippines. Whether you're looking for a home, condo, or commercial space, we've got you covered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white text-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <FaSearch className="text-5xl text-pink-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Online Listings</h3>
              <p className="mb-4">
                Browse through thousands of properties online. Check out these trusted platforms:
              </p>
              <ul className="text-left list-disc list-inside">
                <li><a href="https://www.lamudi.com.ph" className="text-blue-600 hover:underline">Lamudi Philippines</a></li>
                <li><a href="https://www.property24.com.ph" className="text-blue-600 hover:underline">Property24</a></li>
                <li><a href="https://www.dotproperty.com.ph" className="text-blue-600 hover:underline">Dot Property</a></li>
              </ul>
            </div>
            <div className="p-8 bg-white text-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <FaMapMarkerAlt className="text-5xl text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Local Real Estate Agents</h3>
              <p className="mb-4">
                Connect with trusted real estate agents in your area. They can help you find the perfect property.
              </p>
              <ul className="text-left list-disc list-inside">
                <li><a href="https://www.philippine-realtors.com" className="text-blue-600 hover:underline">Philippine Realtors Association</a></li>
                <li><a href="https://www.remax.ph" className="text-blue-600 hover:underline">RE/MAX Philippines</a></li>
              </ul>
            </div>
            <div className="p-8 bg-white text-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <FaBuilding className="text-5xl text-yellow-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Commercial Properties</h3>
              <p className="mb-4">
                Looking for office spaces or retail locations? Explore these resources:
              </p>
              <ul className="text-left list-disc list-inside">
                <li><a href="https://www.colliers.com/philippines" className="text-blue-600 hover:underline">Colliers Philippines</a></li>
                <li><a href="https://www.jll.com.ph" className="text-blue-600 hover:underline">JLL Philippines</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Real Estate Guides Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-violet-700 mb-6">Real Estate Guides</h2>
          <p className="text-lg text-gray-600 mb-12">
            Learn everything you need to know about buying, selling, and investing in real estate in the Philippines.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FaBookOpen className="text-5xl text-orange-700 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Buying a Property</h3>
              <p className="mb-4">
                A step-by-step guide to buying your dream home or investment property.
              </p>
              <a href="https://www.lamudi.com.ph/buying-guide" className="text-blue-600 hover:underline">Read More</a>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FaHandshake className="text-5xl text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Selling a Property</h3>
              <p className="mb-4">
                Tips and tricks to sell your property quickly and at the best price.
              </p>
              <a href="https://www.property24.com.ph/selling-guide" className="text-blue-600 hover:underline">Read More</a>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FaChartLine className="text-5xl text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Real Estate Investing</h3>
              <p className="mb-4">
                Learn how to make smart real estate investments in the Philippines.
              </p>
              <a href="https://www.dotproperty.com.ph/investment-guide" className="text-blue-600 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </section>

      

      {/* Helpful Links Section */}
      <section className="py-16 bg-gradient-to-r from-violet-700 to-indigo-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">Helpful Links</h2>
          <p className="text-lg mb-12">
            Explore these additional resources to make your property search easier.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white text-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <FaHome className="text-5xl text-pink-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Government Resources</h3>
              <ul className="text-left list-disc list-inside">
                <li><a href="https://www.hudcc.gov.ph" className="text-blue-600 hover:underline">HUDCC</a></li>
                <li><a href="https://www.denr.gov.ph" className="text-blue-600 hover:underline">DENR</a></li>
              </ul>
            </div>
            <div className="p-8 bg-white text-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <FaLink className="text-5xl text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Useful Websites</h3>
              <ul className="text-left list-disc list-inside">
                <li><a href="https://www.philpropertyexpert.com" className="text-blue-600 hover:underline">PhilPropertyExpert</a></li>
                <li><a href="https://www.rentpad.com.ph" className="text-blue-600 hover:underline">RentPad</a></li>
              </ul>
            </div>
            <div className="p-8 bg-white text-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <FaMapMarkerAlt className="text-5xl text-yellow-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Location Guides</h3>
              <ul className="text-left list-disc list-inside">
                <li><a href="https://www.lamudi.com.ph/metro-manila" className="text-blue-600 hover:underline">Metro Manila</a></li>
                <li><a href="https://www.lamudi.com.ph/cebu" className="text-blue-600 hover:underline">Cebu</a></li>
              </ul>
            </div>
            <div className="p-8 bg-white text-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <FaBuilding className="text-5xl text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Developers</h3>
              <ul className="text-left list-disc list-inside">
                <li><a href="https://www.ayalaland.com.ph" className="text-blue-600 hover:underline">Ayala Land</a></li>
                <li><a href="https://www.smdevelopment.com" className="text-blue-600 hover:underline">SMDC</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;