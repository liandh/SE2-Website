/*
 *  =============================================================================
 *  CountryDropdown.js
 *  - A dropdown component for selecting a country/location.
 *
 *  Purpose
 *  - This component provides a user interface for selecting a country or location from a list.
 *  - It uses a dropdown menu to display the available options and updates the selected country 
 *    in the global context.
 *
 *  Functionality
 *  - Manages the open/closed state of the dropdown using `useState`.
 *  - Accesses the `country`, `setCountry`, and `countries` values from the `HouseContext`.
 *  - Updates the selected country in the context when an option is chosen.
 *  - Includes a "(any)" option to reset the country selection.
 *  - Visually highlights the currently selected country.
 *
 *  Styling
 *  - Uses custom CSS classes (likely defined in a separate CSS file).
 *  - Leverages React Icons for visual elements (map pin, arrows).
 *  - Uses Headless UI's `Menu` component for dropdown functionality.
 *
 *  Dependencies
 *  - React, useState, useContext
 *  - react-icons (RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine)
 *  - @headlessui/react (Menu)
 *  - ./HouseContext (HouseContext)
 *
 *  Author: Alleina Abad
 *  Date: November 16, 2024
 *  Revised: January 30, 2025
 *
 *  =============================================================================
 */

import React, { useState, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries, handleClick } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleCountrySelect = (location) => {
    setCountry(location); // Update the selected country in context
    setIsOpen(false); // Close the dropdown after selecting
  };

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left hover:bg-violet-400 hover:rounded-lg hover:text-white"
      >
        <RiMapPinLine className="dropdown-icon-primary hover:text-white" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select location</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary hover:text-white" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary hover:text-white" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {/* Add "Location (any)" option */}
        <Menu.Item
          onClick={() => handleCountrySelect("Location (any)")} // Reset to "Location (any)"
          className="cursor-pointer hover:text-violet-700 transition"
          as="li"
        >
          Location (any)
        </Menu.Item>
        {/* List all countries */}
        {countries.map((location, index) => (
          <Menu.Item
            onClick={() => handleCountrySelect(location)} // Select country and close dropdown
            className={`cursor-pointer hover:text-violet-700 transition ${
              country === location ? "font-bold text-violet-700" : ""
            }`}
            as="li"
            key={index}
          >
            {location}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
