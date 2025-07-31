import { useEffect, useState } from "react";
import Header from "./components/common/Header.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import MobileLayout from "./components/layout/MobileLayout.jsx";
import useWeather from "./hooks/weather/useWeather.js";
import weatherEnum from "./common/enums/weatherEnum.js";
import Loading from "./components/common/Loading.jsx";
import useUserLocation from "./hooks/location/useUserLocation.js";

function App() {
  const { locationData, locationError, getUserLocation } = useUserLocation();

  const [params, setParams] = useState({
    lat: null,
    lon: null,
    exclude: weatherEnum.alerts,
  });

  const { weatherData, loading, error, getCurrentWeather } = useWeather();
  const isLoading = loading || !weatherData;

  useEffect(() => {
    if (!locationData) {
      getUserLocation();
      return;
    }

    setParams({
      ...params,
      lat: locationData.coords.latitude,
      lon: locationData.coords.longitude,
    });
  }, [locationData]);

  useEffect(() => {
    if (params.lat && params.lon) {
      getCurrentWeather(params);
    }
  }, [params]);

  return (
    <div className="relative min-h-screen w-full overflow-x-auto">
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full -z-2">
        <img
          src="/background.jpg"
          alt="background"
          className="w-full h-full object-cover blur-xs"
        />
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full -z-1 bg-main-background/30"></div>
      <Header />
      {isLoading ? (
        <Loading />
      ) : error || locationError ? (
        <div className="flex justify-center items-center min-h-screen w-full">
          <p className="text-red-500">{(error || locationError).toString()}</p>
        </div>
      ) : (
        <>
          <MainLayout weatherData={weatherData} />
          {/* <MobileLayout /> */}
        </>
      )}
    </div>
  );
}

export default App;
