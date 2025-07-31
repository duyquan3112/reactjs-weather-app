import React from "react";

const WeekOverviewItemCard = ({ dayOfWeek, weatherIcon, temperature }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 bg-main-background/80 rounded-xl p-2 shadow-lg min-w-[6rem] w-full">
      <p className="text-white text-sm">{dayOfWeek}</p>
      <img
        className="w-16 h-16 flex-shrink-0 object-contain"
        src={weatherIcon}
        alt="weather icon"
      />
      <p className="text-white text-sm">
        {temperature}
        <span className="text-[10px] align-super">&deg;C</span>
      </p>
    </div>
  );
};

export default WeekOverviewItemCard;
