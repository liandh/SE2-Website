//src\components\PostPropertyForm.js

import React, { useState } from "react";

const PostPropertyForm = () => {
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
    console.log("Form submitted:", {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative h-96 bg-gradient-to-r from-violet-700 via-pink-500 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div className="container mx-auto text-center relative z-10 pt-32">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-violet-500 to-blue-900 tracking-wide">
            Post Your Property
          </h1>
          <p className="mt-4 text-xl font-medium bg-gradient-to-r from-white via-white-600 to-violet-800 bg-clip-text text-transparent">
            Submit your property listing details to get it out to the market.
          </p>
        </div>
      </header>

      {/* Form Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                placeholder="Property Title"
              />
            </div>

            <div>
              <label htmlFor="propertyType" className="block text-lg font-medium text-gray-700">Property Type:</label>
              <select
                id="propertyType"
                name="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
              >
                <option value="">Select Property Type</option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
                <option value="Apartment">Apartment</option>
                <option value="Lot">Lot</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-lg font-medium text-gray-700">Price (PHP):</label>
              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                placeholder="Property Price"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                placeholder="Property Address"
              />
            </div>

            <div>
              <label htmlFor="numBedrooms" className="block text-lg font-medium text-gray-700">Number of Bedrooms:</label>
              <input
                type="number"
                id="numBedrooms"
                name="numBedrooms"
                value={numBedrooms}
                onChange={(e) => setNumBedrooms(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                placeholder="Number of Bedrooms"
              />
            </div>

            <div>
              <label htmlFor="numBathrooms" className="block text-lg font-medium text-gray-700">Number of Bathrooms:</label>
              <input
                type="number"
                id="numBathrooms"
                name="numBathrooms"
                value={numBathrooms}
                onChange={(e) => setNumBathrooms(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                placeholder="Number of Bathrooms"
              />
            </div>

            <div>
              <label htmlFor="floorArea" className="block text-lg font-medium text-gray-700">Floor Area (sq.m):</label>
              <input
                type="number"
                id="floorArea"
                name="floorArea"
                value={floorArea}
                onChange={(e) => setFloorArea(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                placeholder="Floor Area"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description:</label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                placeholder="Property Description"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label htmlFor="amenities" className="block text-lg font-medium text-gray-700">Amenities:</label>
              <textarea
                id="amenities"
                name="amenities"
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                placeholder="List of Amenities"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label htmlFor="images" className="block text-lg font-medium text-gray-700">Images:</label>
              <input
                type="file"
                id="images"
                name="images"
                multiple
                onChange={(e) => setImages(e.target.files)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-6 w-full px-6 py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-800 transition duration-300"
              >
                Submit Listing
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PostPropertyForm;
