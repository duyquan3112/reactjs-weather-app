// models/parseWeather.js

const fromJson = (json) => ({
  lat: json["lat"],
  lon: json["lon"],
  timezone: json["timezone"],
  timezoneOffset: json["timezone_offset"],
  current: parseCurrent(json["current"]),
  daily: json["daily"].map(parseDaily),
});

const parseCurrent = (data) => ({
  dt: data["dt"],
  sunrise: data["sunrise"],
  sunset: data["sunset"],
  temp: data["temp"],
  feelsLike: data["feels_like"],
  windSpeed: data["wind_speed"],
  visibility: data["visibility"],
  pressure: data["pressure"],
  humidity: data["humidity"],
  uvi: data["uvi"],
  weather: data["weather"].map(parseWeatherDescription),
});

const parseDaily = (data) => ({
  dt: data["dt"],
  sunrise: data["sunrise"],
  sunset: data["sunset"],
  summary: data["summary"],
  temp: data["temp"],
  feelsLike: data["feels_like"],
  windSpeed: data["wind_speed"],
  visibility: data["visibility"],
  pressure: data["pressure"],
  humidity: data["humidity"],
  uvi: data["uvi"],
  weather: data["weather"].map(parseWeatherDescription),
});

const parseWeatherDescription = (data) => ({
  id: data["id"],
  main: data["main"],
  description: data["description"],
  icon: data["icon"],
});

const weatherModel = {
  fromJson,
};

export default weatherModel;
