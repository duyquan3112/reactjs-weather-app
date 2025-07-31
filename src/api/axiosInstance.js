import axios from "axios";
import { config } from "../configs/config.js";

const axiosInstance = axios.create({
  baseURL: config.apiBaseUrl,
  params: {
    appid: config.weatherApiKey,
    units: "metric",
  },
});

export default axiosInstance;
