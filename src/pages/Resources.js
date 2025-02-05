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
import { GoArrowRight } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import Blog1Image from "../assets/images/blogs/Blog1.png";
import Blog2Image from "../assets/images/blogs/Blog2.png";
import Blog3Image from "../assets/images/blogs/Blog3.png";

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

      <section>
        <div className="relative w-full bg-[#3a0ca3] py-16"> {/* Added padding, removed fixed width */}
          <div className="container mx-auto"> 
            
            {/* Headline */}
            <div className="text-center">
              <div className="WhatSTrending text-white text-xl font-medium font-['Poppins'] uppercase tracking-[2.91px] mb-4">WHAT’S TRENDING</div>
              <div className="LatestBlogsPosts text-white text-[39.80px] font-semibold font-['Poppins'] leading-[47px] mb-16">Latest Blogs & Posts</div> {/* Added margin */}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative ">
                <a href="https://www.rocketmortgage.com/learn/first-time-home-buyer-mistakes" className="card-link block h-full">
                <div className="absolute top-4 left-4 bg-white rounded-bl-[10px] rounded-br-[10px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center px-2"> {/* Date badge */}
                  <div className="text-center text-[#2b2b2b] text-xl font-medium font-['Poppins']">28</div>
                  <div className="text-center text-[#808080] text-base font-normal font-['Poppins'] leading-relaxed">Tue</div>
                </div>
                <img src = {Blog1Image}/> 
                <div className="p-6 relative">
                    <div className="text-white text-[27.60px] font-medium font-['Poppins'] mb-4">
                      Top 13 Home Buying Mistakes to Avoid</div>
                    <div className=" text-neutral-300 text-base font-normal font-['Poppins'] leading-relaxed mb-16">
                      Avoid common home buying pitfalls with research and planning.
                    </div> {/* Added margin bottom for button spacing */}
                    <div className="absolute bottom-4 right-4"> {/* Round button */}
                        <a href="https://www.rocketmortgage.com/learn/first-time-home-buyer-mistakes" className="w-12 h-12 bg-white rounded-full border border-[#3a0ca3] flex items-center justify-center">
                          <GoArrowRight className="text-xl"/>
                        </a>
                    </div>
                  </div>
                </a>
              </div>

              <div className="relative ">
                <a href="https://www.investopedia.com/articles/mortgages-real-estate/08/staging-home.asp" className="card-link block h-full">
                <div className="absolute top-4 left-4 bg-white rounded-bl-[10px] rounded-br-[10px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center px-2"> {/* Date badge */}
                  <div className="text-center text-[#2b2b2b] text-xl font-medium font-['Poppins']">28</div>
                  <div className="text-center text-[#808080] text-base font-normal font-['Poppins'] leading-relaxed">Tue</div>
                </div>
                <img src = {Blog2Image}/> 
                <div className="p-6 relative">
                    <div className="text-white text-[27.60px] font-medium font-['Poppins'] mb-4">
                    How to Stage Your Home for a Quick Sale</div>
                    <div className=" text-neutral-300 text-base font-normal font-['Poppins'] leading-relaxed mb-16">
                    Moves that have the greatest impact when you’re short on time and money
                    </div> {/* Added margin bottom for button spacing */}
                    <div className="absolute bottom-4 right-4"> {/* Round button */}
                        <a href="https://www.investopedia.com/articles/mortgages-real-estate/08/staging-home.asp" className="w-12 h-12 bg-white rounded-full border border-[#3a0ca3] flex items-center justify-center">
                          <GoArrowRight className="text-xl"/>
                        </a>
                    </div>
                  </div>
                </a>
              </div>

              <div className="relative ">
                <a href="https://www.bankrate.com/real-estate/tips-for-selling-home/" className="card-link block h-full">
                <div className="absolute top-4 left-4 bg-white rounded-bl-[10px] rounded-br-[10px] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center px-2"> {/* Date badge */}
                  <div className="text-center text-[#2b2b2b] text-xl font-medium font-['Poppins']">28</div>
                  <div className="text-center text-[#808080] text-base font-normal font-['Poppins'] leading-relaxed">Tue</div>
                </div>
                <img src = {Blog3Image}/> 
                <div className="p-6 relative">
                    <div className="text-white text-[27.60px] font-medium font-['Poppins'] mb-4">
                    1o Tips to Sell Your Home for More Money</div>
                    <div className=" text-neutral-300 text-base font-normal font-['Poppins'] leading-relaxed mb-16">
                    10 tips from realtors to increase your selling price.
                    </div> {/* Added margin bottom for button spacing */}
                    <div className="absolute bottom-4 right-4"> {/* Round button */}
                        <a href="https://www.bankrate.com/real-estate/tips-for-selling-home/" className="w-12 h-12 bg-white rounded-full border border-[#3a0ca3] flex items-center justify-center">
                          <GoArrowRight className="text-xl"/>
                        </a>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

       {/* Rea; Estate Property Guides */}
      <section>
        <div className="relative w-full container mx-auto "> {/* Container for everything, w-full for responsiveness */}

          <div className="text-center mt-16"> {/* Added margin top for spacing */}
            <div data-layer="Guides" className="text-[#2b2b2b] text-xl font-medium font-['Poppins'] tracking-[2.91px] mb-4">
              LEARN MORE</div> {/* Added margin bottom */}
            <div className="text-[#0b090a] text-[39.80px] font-semibold font-['Poppins'] leading-[47px]">
              Real Estate Property Guides</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-center gap-8 mt-16 px-4">
            <div data-layer="Group 47" className="w-[340px] h-[363px] relative">
            <a href="" className="w-[340px] h-[363px] relative block">
              <div data-layer="Rectangle 17" className="Rectangle17 absolute inset-0 bg-white rounded-[30px] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)]"></div> {/* inset-0 */}
              <div className="relative w-[90px] h-[90px] left-1/2 -translate-x-1/2 top-[60px] bg-[#4361ee] rounded-full shadow-[4px_10px_30px_0px_rgba(67,97,238,0.40)] flex items-center justify-center">
                <IoSearch className="text-white text-3xl" />
              </div>
              <div data-layer="Buying a Property" className="absolute top-[180px] left-1/2 -translate-x-1/2 text-center text-[#2b2b2b] text-xl font-medium font-['Poppins']">
              Buy a Property</div> {/* Centered text */}
              <div data-layer="A step-by-step guide to buying your dream home or investment property." 
              className="absolute w-[220px] left-1/2 -translate-x-1/2 top-[214px] text-center text-[#808080] text-base font-normal font-['Poppins'] leading-relaxed">
              A step-by-step guide to buying your dream home or investment property.</div>
              </a>
            </div>

            {/* Repeat the above structure for Group 51 and Group 52 */}
            <div data-layer="Group 51" className="w-[340px] h-[363px] relative">
               <a href="https://ownpropertyabroad.com/philippines/how-to-sell-property-in-the-philippines/" className="w-[340px] h-[363px] relative block">
                <div data-layer="Rectangle 17" className="Rectangle17 absolute inset-0 bg-white rounded-[30px] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)]"></div>
                <div className="relative w-[90px] h-[90px] left-1/2 -translate-x-1/2 top-[60px] bg-[#4361ee] rounded-full shadow-[4px_10px_30px_0px_rgba(67,97,238,0.40)] flex items-center justify-center">
                  <BsHouseDoor className="text-white text-3xl" />
                </div>
                <div data-layer="Sell a Property" className="SellAHouse absolute top-[180px] left-1/2 -translate-x-1/2 text-center text-[#2b2b2b] text-xl font-medium font-['Poppins']">
                
                  Sell a Property
                </div>
                <div data-layer="Tips and tricks to sell your property quickly and at the best price." className="absolute w-[220px] left-1/2 -translate-x-1/2 top-[214px] text-center text-[#808080] text-base font-normal font-['Poppins'] leading-relaxed">
                  Tips and tricks to sell your property quickly and at the best price.
                </div>
                </a>
              </div>


              <div data-layer="Group 52" className="w-[340px] h-[363px] relative">
              <a href="https://www.rcbc.com/how-to-invest-in-real-estate-in-the-philippines" className="w-[340px] h-[363px] relative block">
                <div data-layer="Rectangle 17" className="Rectangle17 absolute inset-0 bg-white rounded-[30px] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)]"></div>
                <div className="relative w-[90px] h-[90px] left-1/2 -translate-x-1/2 top-[60px] bg-[#4361ee] rounded-full shadow-[4px_10px_30px_0px_rgba(67,97,238,0.40)] flex items-center justify-center">
                <MdAttachMoney className="text-white text-3xl" />
              </div>
                <div data-layer="Real Estate Investing" className="RentAHouse absolute top-[180px] left-1/2 -translate-x-1/2 text-center text-[#2b2b2b] text-xl font-medium font-['Poppins']">
                  Invest a Property</div>
                <div data-layer="Learn how to make smart real estate investments in the Philippines." className="DonecPorttitorEuismodDignissimNullamALaciniaIpsumNecDignissimPurus absolute w-[220px] left-1/2 -translate-x-1/2 top-[214px] text-center text-[#808080] text-base font-normal font-['Poppins'] leading-relaxed">
                  Learn how to make smart real estate investments in the Philippines.
                </div>
                </a>
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