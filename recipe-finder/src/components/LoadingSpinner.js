// src/components/LoadingSpinner.js
import React from "react";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center mt-8">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

export default LoadingSpinner;
