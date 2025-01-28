//src\components\HouseContext.js

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
