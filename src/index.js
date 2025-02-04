/*  
 *    =============================================================================
 *            index.js 
 *                    - The entry point of the React app that initializes routing 
 *                      and context.
 *
 *            Purpose
 *                    - This file is the entry point where the React app is rendered 
 *                      inside the root element. It also wraps the app in necessary 
 *                      providers like Router and Context.
 * 
 *            Key Components:
 *                     - React Router: Allows for route management.
 *                     - HouseContextProvider: Provides context for managing state.
 * 
 *            Algorithms:
 *                     - React context and routing mechanisms.
 * 
 *            Control Flow:
 *                     - Conditional rendering based on route and context provider.
 * 
 *            Author: Alleina Abad
 *            Date: November 16, 2024
 *            Revised: January 31, 2025
 *    =============================================================================
 */


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter as Router} from "react-router-dom";

import HouseContextProvider from './components/HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
    <Router> 
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </HouseContextProvider>
);


