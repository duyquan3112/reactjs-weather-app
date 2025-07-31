import React from "react";
import TopBar from "./TopBar.jsx";
import NavBar from "./NavBar.jsx";

const Header = () => {
  return (
    <div className="w-full">
      <TopBar />
      <NavBar />
    </div>
  );
};

export default React.memo(Header);
