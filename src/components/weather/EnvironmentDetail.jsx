const EnvironmentDetail = ({ icon, value, label }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={icon} alt="" className="w-10 h-10 min-w-6 object-contain" />
      <div className="flex flex-col items-start justify-center">
        <p className="text-white text-sm">{value}</p>
        <p className="text-white text-xs">{label}</p>
      </div>
    </div>
  );
};

export default EnvironmentDetail;
