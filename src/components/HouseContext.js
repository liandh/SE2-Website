JavaScript

/*
 *  =============================================================================
 *  HouseContextProvider.js
 *  - Provides a context for managing and filtering house data.
 *
 *  Purpose
 *  - This component acts as a provider for the HouseContext, making house data and related functions available to other components in the application.
 *  - It fetches house data from a CSV file, manages filtering based on criteria like country, price, property type, and search term, and provides access to this data and filtering logic through the context.
 *
 *  Functionality
 *  - Fetches house data from 'metadata.csv' using `papaparse` on component mount.
 *  - Initializes state for houses, filtered houses, selected country, price range, property type, loading status, available countries, and available property types.
 *  - Provides functions for handling search input (`handleSearch`) and filtering houses based on selected criteria (`handleClick`).
 *  - Updates the filtered houses based on the search term and selected filters.
 *  - Makes the filtered house data, loading state, filtering functions, and filter options available through the HouseContext.
 *
 *  Dependencies
 *  - React (useState, useEffect, createContext)
 *  - papaparse
 *
 *  Context
 *  - HouseContext: Provides access to house data, loading state, filtering functions, and filter options to consuming components.
 *
 *  Data Source
 *  - 'metadata.csv'
 *
 *  Author: Alleina Abad
 *  Date: November 16, 2024 
 *  Revised: January 30, 2025
 *
 *  =============================================================================
 */

import React, { useState, useEffect, createContext } from 'react';
import Papa from 'papaparse';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState([]); // State for filtered houses
    const [country, setCountry] = useState("Location (any)");
    const [price, setPrice] = useState('Price range (any)');
    const [property, setProperty] = useState("Property type (any)"); // Define property state
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]); 
    const [properties, setProperties] = useState([]); 

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('/metadata.csv'); 
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder("utf-8");
            const csvData = decoder.decode(result.value);

            Papa.parse(csvData, {
                header: true,
                complete: (results) => {
                    setHouses(results.data);
                    setFilteredHouses(results.data);
                    setLoading(false);

                    const uniqueCountries = [...new Set(results.data.map(house => house.location))];
                    const uniqueProperties = [...new Set(results.data.map(house => house.propertyType))]; // Use correct field
                    setCountries(uniqueCountries);
                    setProperties(uniqueProperties);
                },
                error: (error) => {
                    console.error("Error reading CSV:", error);
                    setLoading(false);
                },
            });
        };

        loadData();
    }, []);

    // Update filteredHouses whenever houses change
    useEffect(() => {
        setFilteredHouses(houses); // Initialize filtered houses with all houses on initial load
    }, [houses]);

    // Function to filter houses based on the search term
    const handleSearch = (searchTerm) => {
        if (searchTerm === "") {
            setFilteredHouses(houses); // If search is empty, show all houses
        } else {
            const filtered = houses.filter((house) => {
                // Check if title and location exist before using toLowerCase()
                const houseTitle = house.title ? house.title.toLowerCase() : '';
                const houseLocation = house.location ? house.location.toLowerCase() : '';
    
                return houseTitle.includes(searchTerm.toLowerCase()) ||
                       houseLocation.includes(searchTerm.toLowerCase());
            });
            setFilteredHouses(filtered);
        }
    };

    const handleClick = () => {
        setLoading(true);
    
        // Apply price range filter
        const minPrice = price === 'Price range (any)' ? 0 : parseInt(price.split(' - ')[0]);
        const maxPrice = price === 'Price range (any)' || price === '6000000+' ? Infinity : parseInt(price.split(' - ')[1]);
    
        const normalizedCountry = country.trim().toLowerCase();
        const normalizedProperty = property.trim().toLowerCase(); // Ensure property is lowercase
    
        // Filter houses
        const filteredHouses = houses.filter(house => {
            const normalizedLocation = house.location ? house.location.trim().toLowerCase() : '';
            const houseTitle = house.title ? house.title.trim().toLowerCase() : ''; // Ensure title is lowercase
    
            const housePriceString = house.price ? house.price.replace(/[^\d]/g, '') : null;
            const housePrice = housePriceString ? parseInt(housePriceString) : null;
    
            const matchesPrice = housePrice !== null && housePrice >= minPrice && housePrice <= maxPrice;
            const matchesCountry = normalizedCountry === "location (any)" || normalizedLocation === normalizedCountry;
    
            // Check if the selected property type is in the title (case-insensitive)
            const matchesProperty =
                normalizedProperty === "property type (any)" ||
                houseTitle.includes(normalizedProperty); // Both are lowercase
    
            return matchesPrice && matchesCountry && matchesProperty;
        });
    
        setFilteredHouses(filteredHouses.length < 1 ? [] : filteredHouses);
        setLoading(false);
    };
    
    return (
        <HouseContext.Provider value={{
            houses: filteredHouses,
            loading,
            handleClick,
            handleSearch, // Add handleSearch to the context if needed
            country,
            setCountry,
            price,
            setPrice,
            property, // Add property to context
            setProperty, // Add setProperty to context
            countries,
            properties,
        }}>
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;
