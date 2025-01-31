/*  
 *    =============================================================================
 *            App.test.js 
 *                    - Contains unit tests for the App component.
 *
 *            Purpose
 *                    - This file is used to test if the "learn react" link is rendered 
 *                      correctly within the App component using React Testing Library.
 * 
 *            Key Components:
 *                     - Test: Renders the App component and checks for the presence of
 *                       specific text within the component.
 * 
 *            Algorithms:
 *                     - React Testing Library render function to render components in 
 *                       test environments.
 * 
 *            Control Flow:
 *                     - Simple control flow to render and test the component.
 * 
 *            Author: Alleina Abad
 *            Date: November 16, 2024
 *            Revised: January 31, 2025
 *    =============================================================================
 */


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
