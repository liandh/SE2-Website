/*  
 *    =============================================================================
 *            App.js 
 *                    - Manages routing and renders main components of the app.
 *
 *            Purpose
 *                    - This file handles the application routing using React Router 
 *                      and serves as the main entry point, rendering key components 
 *                      such as Header, Footer, and different pages.
 * 
 *            Key Components:
 *                     - Routes: Defines routes for different pages such as Home, Sell,
 *                       About Us, and more.
 *                     - Header/Footer: The header and footer are rendered on all pages.
 * 
 *            Algorithms:
 *                     - React Router to handle route management.
 * 
 *            Control Flow:
 *                     - Uses conditional rendering via React Router and React Context.
 * 
 *            Author: Alleina Abad
 *            Date: November 16, 2024
 *            Revised: January 31, 2025
 *    =============================================================================
 */


import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import ImageSearch from "./pages/ImageSearch"; 
import ListingDetail from "./components/ListingDetail";
import ListingDetailByImage from "./pages/ListingDetailByImage";
import AboutUs from "./pages/AboutUs";
import Resources from "./pages/Resources";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/image-search" element={<ImageSearch />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/listing-detail-by-image/:imageUrl" element={<ListingDetailByImage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
