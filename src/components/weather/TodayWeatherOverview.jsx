import React from "react";
import TodayOverviewItemCard from "../card/TodayOverviewItemCard.jsx";
import icons from "../../common/icons.js";

const TodayWeatherOverview = ({ todayWeatherData }) => {
  return (
    <div className="w-full">
      <p className="text-white text-sm">Today's Overview</p>
      <div className="overflow-x-auto w-full scroll-auto pb-4">
        <div className="flex flex-row items-stretch justify-between space-x-4 w-full mt-4">
          <TodayOverviewItemCard
            title="Air Quality Index"
            value={todayWeatherData.airQualityIndex}
            icon={icons.airQualityIndex}
            status="GOOD"
          />
          <TodayOverviewItemCard
            title="UV Index"
            value={todayWeatherData.uvIndex}
            icon={icons.uvIndex}
            status="MODERATE"
          />
          <TodayOverviewItemCard
            title="Pressure (hPa)"
            value={todayWeatherData.pressure}
            icon={icons.pressureIndex}
            status="NORMAL"
          />
        </div>
      </div>
    </div>
  );
};

export default TodayWeatherOverview;
