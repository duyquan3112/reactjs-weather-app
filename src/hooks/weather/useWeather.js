import { useState } from "react";
import weatherService from "../../api/services/weatherService.js";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCurrentWeather = async (params) => {
    setLoading(true);

    //add wait time to simulate loading
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const response = await weatherService.getCurrentWeather(params);
      console.log(response);
      setWeatherData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, getCurrentWeather };
};

export default useWeather;
