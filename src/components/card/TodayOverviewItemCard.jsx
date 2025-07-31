import React from "react";

const TodayOverviewItemCard = ({ title, value, icon, status }) => {
  const statusColor = {
    GOOD: "text-green-500",
    MODERATE: "text-yellow-500",
    NORMAL: "text-gray-100",
    BAD: "text-red-500",
  };
  return (
    <div className="flex flex-col item-start justify-center space-y-2 bg-main-background/80 rounded-xl px-4 py-2 shadow-lg w-full min-w-[14rem]">
      <p className="text-white text-xs">{title}</p>
      <div className="flex flex-row items-end justify-between w-full ">
        <div className="flex flex-col items-start justify-end space-y-4 pb-6">
          <p className="text-white text-5xl font-bold">{value ?? "-/-"}</p>
          {status && (
            <p className={`text-xs font-semibold ${statusColor[status]}`}>
              {status}
            </p>
          )}
        </div>
        <img src={icon} alt="icon" className="w-18 h-18 object-contain" />
      </div>
    </div>
  );
};

export default TodayOverviewItemCard;
