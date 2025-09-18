// src/components/LoadingSpinner.js
import React from "react";
import "./LoadingSpinner.css"; // paste chosen spinkit CSS here

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      {/* spinner markup (from SpinKit) - example double bounce */}
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
}
