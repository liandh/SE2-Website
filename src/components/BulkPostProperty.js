/*
 * =============================================================================
 * BulkPostProperty.js (RealEstateListingForm.js)
 * - Component for uploading a CSV file of real estate listings for bulk posting.
 *
 * Purpose
 * - This component provides a form for users to upload a CSV file containing 
 *   multiple real estate listings. It handles file selection, submission, and 
 *   (currently) simulates the upload process.  It also has a placeholder for 
 *   fraud checking functionality.
 *
 * Functionality
 * - Manages the selected CSV file name using `useState`.
 * - Handles file selection and validates that the chosen file is a CSV.
 * - Simulates CSV upload on form submission.
 * - Logs the submitted file name to the console.
 * - Includes a placeholder for fraud checking (currently commented out).
 * - Uses react-router-dom's useNavigate for potential navigation after submission.
 *
 * Styling
 * - Uses custom CSS defined in `../css/BulkPostProperty.css`.
 *
 * Dependencies
 * - React, { useState }
 * - react-router-dom, { useNavigate }
 * - ../css/BulkPostProperty.css
 *
 * Author: Allysa Saymo
 * Date: December 5, 2024
 * Revised: January 30, 2025
 *
 * =============================================================================
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/BulkPostProperty.css';

const RealEstateListingForm = () => {
  const [csvFileName, setCsvFileName] = useState('');
  const [isFileSubmitted, setIsFileSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!csvFileName) {
      console.error('No file submitted');
      return;
    }

    await fakeUploadCSV();
    console.log('CSV file submitted:', csvFileName);
    setIsFileSubmitted(true); 
  };

  const fakeUploadCSV = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const handleFraudCheck = () => {
    navigate('/fraud-results', { state: { csvFileName } });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      setCsvFileName(file.name);
    } else {
      console.error('Please upload a valid CSV file.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2 class="title">Real Estate Listing Form</h2>
        <div class="dropzone-container" id="dropzone">
          <input
            type="file"
            accept=".csv"
            class="absolute inset-0 w-full h-full opacity-0 z-50"
            onChange={handleFileChange}
          />
          <div class="text-center">
          <img class="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="Upload" />
            <h3 class="mt-2 text-sm font-medium text-gray-900">
              <label htmlFor="file-upload" class="relative cursor-pointer">
                Drag and drop or browse to upload
              </label>
            </h3>
          </div>
          {csvFileName && (
            <div class="mt-4 text-center">
              <p class="text-sm text-gray-700">
                Uploaded File: <strong>{csvFileName}</strong>
              </p>
            </div>
          )}
        </div>
        <input type="submit" value="Submit" class="submit-button" />
        {/* {isFileSubmitted && (
          <button type="button" onClick={handleFraudCheck} class="fraud-check-button">
            Check Fraud Filter
          </button>
        )} */}
      </fieldset>
    </form>
  );
};

export default RealEstateListingForm;
