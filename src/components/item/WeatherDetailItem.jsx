const WeatherDetailItem = ({ icon, children }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <img className="w-6 h-6 object-contain" src={icon} alt="icon" />
      {children && <p className="text-white text-xs">{children}</p>}
    </div>
  );
};

export default WeatherDetailItem;
