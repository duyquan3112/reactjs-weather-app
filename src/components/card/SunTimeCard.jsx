import React from "react";

const SunTimeCard = ({ icon, time, title }) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-3 bg-primary-gray/10 rounded-xl p-4 shadow-lg">
      <img src={icon} alt="icon" className="w-8 h-8 object-contain" />
      <div className="flex flex-col space-y-1 items-start justify-center">
        <p className="text-gray-400 text-xs">{title}</p>
        <p className="text-white text-sm">{time}</p>
      </div>
    </div>
  );
};

export default SunTimeCard;
