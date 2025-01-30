/*
 *  =============================================================================
 *  PriceRangeDropdown.js
 *  - Provides a dropdown menu for selecting a price range for property searches.
 *
 *  Purpose
 *  - This component renders a dropdown menu that allows users to filter properties based on a predefined price range.
 *  - It uses the Headless UI `Menu` component for accessibility and customizability.
 *
 *  Functionality
 *  - Manages the open/closed state of the dropdown using `useState`.
 *  - Accesses and updates the selected price range using the `HouseContext`.
 *  - Renders a list of price range options from a predefined array.
 *  - Visually indicates the currently selected price range.
 *
 *  Styling
 *  - Uses custom CSS classes (likely defined in a separate CSS file or styled-components) for styling the dropdown.  Tailwind CSS classes are also used.
 *
 *  Dependencies
 *  - React, useState, useContext
 *  - react-icons (RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine)
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
// ... rest of your code

import React, { useState, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    { value: 'Price range (any)' },
    { value: '0 - 2000000' },
    { value: '2000000 - 4000000' },
    { value: '4000000 - 6000000' },
    { value: '6000000+' },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left hover:bg-violet-400 hover:rounded-lg hover:text-white"
      >
        <RiWallet3Line className='dropdown-icon-primary hover:text-white' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose price</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary hover:text-white' />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary hover:text-white" />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((priceOption, index) => (
          <Menu.Item
            onClick={() => setPrice(priceOption.value)}
            className={`cursor-pointer hover:text-violet-700 transition ${
              price === priceOption.value ? "font-bold text-violet-700" : ""
            }`}
            as='li'
            key={index}
          >
            {priceOption.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;