import React from "react";
import bgCity from "./assets/city.png";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black select-none">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: `url(${bgCity})` }}
      />

      <svg
        className="absolute right-0 top-0 h-full w-[65%]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <polygon
          points="1000,0 1000,1000 0,1000 450,0"
          fill="#800000"
        />
      </svg>
    </div>
  );
}