import React, { useMemo } from "react";
import WeekOverviewItemCard from "../card/WeekOverviewItemCard";
import weatherIconUtil from "../../utils/weatherIconUtil/weatherIconUtil.js";

const WeekWeatherOverview = ({ weekWeatherData }) => {
  const days = weekWeatherData.map((day) => {
    const date = new Date(day.dt * 1000).toLocaleDateString("en-US", {
      weekday: "short",
    });
    return date;
  });

  const weatherIcons = useMemo(() => {
    return weekWeatherData.map((day) => {
      const weatherIcon = weatherIconUtil.getWeatherIcon(day.weather[0].id);
      return weatherIcon;
    });
  }, [weekWeatherData]);

  return (
    <div className="w-full">
      <p className="text-white text-sm">Week's Overview</p>
      <div className="overflow-x-auto w-full scroll-auto pb-4">
        <div className="flex flex-row items-center justify-between mt-4 w-full space-x-4">
          {days.map((day, index) => (
            <div key={index}>
              <WeekOverviewItemCard
                dayOfWeek={day}
                weatherIcon={weatherIcons[index]}
                temperature={weekWeatherData[index].temp.day.toFixed(0)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(WeekWeatherOverview);
