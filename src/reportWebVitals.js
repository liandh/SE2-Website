/*  
 *    =============================================================================
 *            reportWebVitals.js 
 *                    - Tracks performance metrics for the app.
 *
 *            Purpose
 *                    - This file logs performance-related metrics like CLS, FID, and FCP 
 *                      using the `web-vitals` library to help monitor app performance.
 * 
 *            Key Components:
 *                     - Web Vitals API: Measures Core Web Vitals.
 * 
 *            Algorithms:
 *                     - Imports the `web-vitals` library dynamically to track metrics.
 * 
 *            Control Flow:
 *                     - Function call to handle the reporting of performance data.
 * 
 *            Author: Alleina Abad
 *            Date: November 16, 2024
 *            Revised: January 31, 2025
 *    =============================================================================
 */


const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
