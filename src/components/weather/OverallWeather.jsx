import React from "react";
import WeekWeatherOverview from "./WeekWeatherOverview.jsx";
import TodayWeatherOverview from "./TodayWeatherOverview.jsx";
import SunTimeOverview from "./SunTimeOverview.jsx";

const OverallWeather = ({ overallWeatherData }) => {
  return (
    <div className="flex flex-col bg-main-background/50 items-center justify-start max-w-[60%] min-w-[40%] p-4 max-h-[80%] border border-gray-100/20 rounded-xl space-y-4">
      <WeekWeatherOverview weekWeatherData={overallWeatherData.daily} />
      <TodayWeatherOverview
        todayWeatherData={{
          airQualityIndex: 20, // api not available
          uvIndex: overallWeatherData.current.uvi,
          pressure: overallWeatherData.current.pressure,
        }}
      />
      <SunTimeOverview
        sunTimeData={{
          sunrise: overallWeatherData.current.sunrise,
          sunset: overallWeatherData.current.sunset,
        }}
      />
    </div>
  );
};

export default React.memo(OverallWeather);
