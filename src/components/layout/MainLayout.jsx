import OverallWeather from "../weather/OverallWeather.jsx";
import TodayWeather from "../weather/TodayWeather.jsx";

const MainLayout = ({ weatherData }) => {
  const timezone = weatherData.timezone.split("/")[1].replace(/_/g, " ");
  return (
    <div className="h-full w-full animate-fade-in-zoom">
      <div className="hidden container max-h-full pt-8 pb-8 md:flex mx-auto items-stretch justify-center space-x-6">
        <TodayWeather
          currentWeatherData={weatherData.current}
          location={timezone}
        />
        <OverallWeather overallWeatherData={weatherData} />
      </div>
    </div>
  );
};

export default MainLayout;
