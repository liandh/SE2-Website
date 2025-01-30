/*
 *  =============================================================================
 *  PropertyDropdown.js
 *  - A dropdown component for selecting a property type.
 *
 *  Purpose
 *  - This component renders a dropdown menu that allows users to select a type of property (e.g., House, Condo, Apartment).
 *  - It uses the Headless UI `Menu` component for accessibility and styling.
 *  - The selected property type is managed using React's Context API through `HouseContext`.
 *
 *  Functionality
 *  - Manages the open/closed state of the dropdown using `useState`.
 *  - Accesses the `property` state and `setProperty` function from `HouseContext`.
 *  - Provides a default option ("Property type (any)") and a list of property types.
 *  - Updates the `property` state in `HouseContext` when an option is selected.
 *  - Visually indicates the selected option using styling.
 *
 *  Styling
 *  - Uses custom CSS classes (`dropdown`, `dropdown-btn`, `dropdown-icon-primary`, `dropdown-icon-secondary`, `dropdown-menu`) likely defined in a separate CSS file.
 *
 *  Dependencies
 *  - React, useState, useContext
 *  - react-icons (RiHome5Line, RiArrowDownSLine, RiArrowUpSLine)
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
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
    const { property, setProperty } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);

    // Define the property options
    const propertyOptions = ["House", "Condo", "Apartment"];

    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className="dropdown-btn w-full text-left hover:bg-violet-400 hover:rounded-lg hover:text-white"
            >
                <RiHome5Line className='dropdown-icon-primary hover:text-white' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'>{property || "Property type (any)"}</div>
                    <div className='text-[13px]'>Select property type</div>
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className='dropdown-icon-secondary hover:text-white' />
                ) : (
                    <RiArrowDownSLine className="dropdown-icon-secondary hover:text-white" />
                )}
            </Menu.Button>
            <Menu.Items className='dropdown-menu'>
                <Menu.Item
                    onClick={() => setProperty("Property type (any)")}
                    className={`cursor-pointer hover:text-violet-700 transition ${
                        property === "Property type (any)" ? "font-bold text-violet-700" : ""
                    }`}
                    as='li'
                >
                    Property type (any)
                </Menu.Item>
                {propertyOptions.map((option, index) => (
                    <Menu.Item
                        onClick={() => setProperty(option)}
                        className={`cursor-pointer hover:text-violet-700 transition ${
                            property === option ? "font-bold text-violet-700" : ""
                        }`}
                        as='li'
                        key={index}
                    >
                        {option}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
};

export default PropertyDropdown;