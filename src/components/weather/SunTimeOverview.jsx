import React from "react";
import SunTimeCard from "../card/SunTimeCard.jsx";
import icons from "../../common/icons.js";
import dateUtil from "../../utils/dateUtil/dateUtil.js";

const SunTimeOverview = ({ sunTimeData }) => {
  const sunrise = dateUtil.getTimeByUnix(sunTimeData.sunrise, true);
  const sunset = dateUtil.getTimeByUnix(sunTimeData.sunset, true);
  return (
    <div className="flex flex-col items-start justify-center space-y-2 bg-main-background/80 rounded-xl p-4 shadow-lg">
      <p className="text-white text-sm">Sunrise & Sunset</p>
      <div className="flex flex-row items-center justify-center space-x-4">
        <SunTimeCard icon={icons.sunrise} time={sunrise} title="Sunrise" />
        <SunTimeCard icon={icons.sunset} time={sunset} title="Sunset" />
      </div>
    </div>
  );
};

export default React.memo(SunTimeOverview);
