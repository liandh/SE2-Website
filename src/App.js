// src/App.js
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
