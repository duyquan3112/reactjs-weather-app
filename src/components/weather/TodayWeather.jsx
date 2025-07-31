import icons from "../../common/icons.js";
import EnvironmentDetail from "./EnvironmentDetail.jsx";
import WeatherDetailItem from "../item/WeatherDetailItem.jsx";
import weatherIconUtil from "../../utils/weatherIconUtil/weatherIconUtil.js";
import { useMemo } from "react";
import textUtil from "../../utils/textUtil/textUtil.js";

const TodayWeather = ({ currentWeatherData, location }) => {
  if (!currentWeatherData) return <></>;

  const weatherIcon = useMemo(
    () => weatherIconUtil.getWeatherIcon(currentWeatherData.weather[0].id),
    [currentWeatherData.weather[0].id]
  );

  const date = useMemo(
    () =>
      new Date(currentWeatherData.dt * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
    [currentWeatherData.dt]
  );

  const weatherDescription =
    textUtil.capitalize(currentWeatherData.weather[0].description) ?? "-/-";

  const temperature = (+currentWeatherData.temp).toFixed(0);
  const feelsLike = (+currentWeatherData.feelsLike).toFixed(0);
  const visibility = (+currentWeatherData.visibility / 1000).toFixed(1);
  const humidity = currentWeatherData.humidity;
  const windSpeed = (+currentWeatherData.windSpeed).toFixed(0);

  return (
    <div className="flex flex-col bg-main-background/50 items-center justify-start min-w-[20%] p-4 max-h-[80%] border shadow-lg border-gray-100/20 rounded-xl">
      <input
        id="search-input"
        className="bg-blue-100/20 w-[80%] placeholder:text-gray-200 placeholder:text-xs px-2 py-1 rounded-md focus:outline-none focus:shadow-lg text-gray-200"
        placeholder="Search city..."
        type="text"
      />
      <div className="flex flex-col mt-4 items-center space-y-3 w-full px-4">
        <img
          className="h-[8rem] w-[8rem] object-cover"
          src={weatherIcon}
          alt="Weather Icon"
        />
        <p className="text-gray-50 font-bold text-7xl">
          {temperature}
          <span className="text-3xl align-super">&deg;C</span>
        </p>
        <div className="flex w-full justify-between text-sm text-white py-4 border-b space-x-4">
          <span>{location}</span>
          <span>{date}</span>
        </div>
        <div className="flex flex-col w-full justify-start items-start space-y-2 mt-4">
          <WeatherDetailItem icon={weatherIcon}>
            <span className="text-sm">{weatherDescription}</span>
          </WeatherDetailItem>
          <WeatherDetailItem icon={icons.feelsLike}>
            <span>
              Feels Like - {feelsLike}
              <sup>&deg;C</sup>
            </span>
          </WeatherDetailItem>
          <WeatherDetailItem icon={icons.binoculars}>
            <span>Visibility - {visibility} km</span>
          </WeatherDetailItem>
        </div>
        <div className="bg-main-background/80 w-full rounded-xl shadow-lg mt-4">
          <div className="flex p-4 space-x-4">
            <EnvironmentDetail
              icon={icons.humidity}
              value={`${humidity}%`}
              label="Humidity"
            />
            <EnvironmentDetail
              icon={icons.windSpeed}
              value={`${windSpeed} km/h`}
              label="Wind Speed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
