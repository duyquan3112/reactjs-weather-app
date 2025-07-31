import React from "react";

const NavBar = () => {
  return (
    <nav className="container mx-auto flex items-center px-6 py-4 justify-between">
      <div className="flex space-x-2 items-end cursor-pointer">
        <img
          className="h-12 w-12 min-w-10 object-contain"
          src="/logo.svg"
          alt="App Logo"
        />
        <p className="text-lg font-semibold text-white">Weather</p>
      </div>
    </nav>
  );
};

export default NavBar;
