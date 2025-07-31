import icons from "../../common/icons.js";

const getWeatherIcon = (statusCode) => {
  const group = Math.floor(statusCode / 100);

  switch (group) {
    case 2:
      return icons.thunderStorm;
    case 3:
    case 5:
      return icons.heavyRain;
    case 6:
      return icons.snow;
    case 7:
      return icons.fog;
    case 8:
      return statusCode === 800 ? icons.clearDay : icons.cloudy;
    default:
      return null;
  }
};

const weatherIconUtil = {
  getWeatherIcon,
};

export default weatherIconUtil;
