/**
 * This file measures and reports various Web Vitals metrics for the application's performance.
 * Web Vitals are a set of metrics that measure real-world user experience for:
 * - Loading performance
 * - Interactivity
 * - Visual stability
 * 
 * @param {Function} onPerfEntry - Callback function to handle performance measurements
 */
const reportWebVitals = onPerfEntry => {
  // Only execute if a valid callback function is provided
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // CLS (Cumulative Layout Shift) - measures visual stability
      getCLS(onPerfEntry);
      // FID (First Input Delay) - measures interactivity
      getFID(onPerfEntry);
      // FCP (First Contentful Paint) - measures loading performance
      getFCP(onPerfEntry);
      // LCP (Largest Contentful Paint) - measures loading performance
      getLCP(onPerfEntry);
      // TTFB (Time to First Byte) - measures initial server response time
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
