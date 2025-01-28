//src\pages\Sell.js

import React, { useState } from 'react';
import '../css/PostListingForm.css';

const RealEstateListingForm = () => {
  const [title, setTitle] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [numBedrooms, setNumBedrooms] = useState('');
  const [numBathrooms, setNumBathrooms] = useState('');
  const [floorArea, setFloorArea] = useState('');
  const [description, setDescription] = useState('');
  const [amenities, setAmenities] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', {
      title,
      propertyType,
      price,
      address,
      numBedrooms,
      numBathrooms,
      floorArea,
      description,
      amenities,
      images,
    });
  };

  // ----------handle file
  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImages((prevImages) => [...prevImages, reader.result]);
    };
  };

  // Drag-and-drop event handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.classList.add('border-indigo-600');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove('border-indigo-600');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.target.classList.remove('border-indigo-600');
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
  
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  //--------------------------

  return (
    <div className="min-h-screen bg-gradient-to-t from-violet-700 via-purple-600 to-pink-500">
      {/* Hero Section */}
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/violetbg2.JPG)` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div className="container mx-auto text-center relative z-10 pt-32">
        <h1 className="text-6xl font-bold leading-tight tracking-wide bg-gradient-to-t from-pink-400 via-violet-500 to-blue-700 bg-clip-text text-transparent" 
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Sell Your Property
          </h1>
          <p className="mt-6 text-2xl font-medium max-w-5xl mx-auto bg-gradient-to-r from-white to-white bg-clip-text text-transparent" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Fill out the form below to list your property with us and reach potential buyers
          </p>
        </div>
      </header>

      {/* Form Section */}
      <div className="container mx-auto py-16 px-8">
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-violet-800 text-center mb-1">Real Estate Listing Form</h2>
          <hr className="border-t-2 border-violet-700 mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title:</label>
              <input
                type="text"
                id="title"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Property Type */}
            <div>
              <label htmlFor="propertyType" className="block text-lg font-medium text-gray-700">Property Type:</label>
              <select
                id="propertyType"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">Select Property Type</option>
                <option value="House">House</option>
                <option value="House and Lot">House and Lot</option>
                <option value="Lot">Lot</option>
                <option value="Condo">Condo</option>
                <option value="Apartment">Apartment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-lg font-medium text-gray-700">Price:</label>
              <input
                type="number"
                id="price"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="1"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address:</label>
              <input
                type="text"
                id="address"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Number of Bedrooms */}
            <div>
              <label htmlFor="numBedrooms" className="block text-lg font-medium text-gray-700">Number of Bedrooms:</label>
              <input
                type="number"
                id="numBedrooms"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                value={numBedrooms}
                onChange={(e) => setNumBedrooms(e.target.value)}
                min="0"
              />
            </div>

            {/* Number of Bathrooms */}
            <div>
              <label htmlFor="numBathrooms" className="block text-lg font-medium text-gray-700">Number of Bathrooms:</label>
              <input
                type="number"
                id="numBathrooms"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                value={numBathrooms}
                onChange={(e) => setNumBathrooms(e.target.value)}
                min="0"
              />
            </div>

            {/* Floor Area */}
            <div>
              <label htmlFor="floorArea" className="block text-lg font-medium text-gray-700">Floor Area (sq.m.):</label>
              <input
                type="number"
                id="floorArea"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                value={floorArea}
                onChange={(e) => setFloorArea(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description:</label>
              <textarea
                id="description"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
              ></textarea>
            </div>

            {/* Amenities */}
            <div className="col-span-2">
              <label htmlFor="amenities" className="block text-lg font-medium text-gray-700">Amenities:</label>
              <textarea
                id="amenities"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
                rows="4"
              ></textarea>
            </div>
          </div>

          {/* Dropzone Section */}
          <div
            className="dropzone-container border-2 border-dashed border-gray-300 p-6 text-center rounded-lg w-full"
            id="dropzone"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 z-50"
              onChange={handleFileChange}
              multiple
            />
            <div>
              <img
                className="mx-auto h-12 w-12"
                src="https://www.svgrepo.com/show/357902/image-upload.svg"
                alt="Upload"
              />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                Drag and drop or 
                <strong className="text-indigo-600"> browse </strong>
                to upload
              </h3>
              <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>

            {/* Image Preview */}
            {images.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center items-center">
                {images.map((image, index) => (
                  <img key={index} src={image} alt={`Preview ${index}`} className="max-h-40 m-1" />
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-800 font-semibold text-white rounded-lg hover:bg-violet-800 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RealEstateListingForm;
