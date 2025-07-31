import axiosInstance from "../axiosInstance.js";
import { weatherEndpoints } from "../endpoints/weatherEndpoint.js";
import weatherModel from "../../models/weather/weatherModel.js";
import { handleError } from "../../utils/errorUtil/handleError.js";

const getCurrentWeather = async (params) => {
  try {
    const response = await axiosInstance.get(weatherEndpoints.currentWeather, {
      params,
    });
    return weatherModel.fromJson(response.data);
  } catch (error) {
    handleError(error);
  }
};

export default { getCurrentWeather };
