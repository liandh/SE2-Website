//src\components\CountryDropdown.js

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
