import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container d-flex align-items-center justify-content-center mb-5">
      <div className="banner text-white">
        <h1>
          Amazing Tour In <br /> Bangladesh
        </h1>
        <h4 className="default-color mt-4">5 Days, 6 Night Tour</h4>
      </div>
    </div>
  );
};

export default Banner;
