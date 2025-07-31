import React from "react";

const TopBar = () => {
  return (
    <div className="bg-black">
      <div className="container py-3 mx-auto flex items-center justify-center text-center">
        <p className="text-sm text-gray-200">
          Information of Weather was provided by
          <a
            className="italic text-white md:hover:text-blue-200"
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            openweathermap.org
          </a>
        </p>
      </div>
    </div>
  );
};

export default TopBar;
