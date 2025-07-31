import { useState } from "react";

const useUserLocation = () => {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  const getUserLocation = () => {
    try {
      if (!navigator.geolocation) {
        setError(new Error("Geolocation not supported"));
      } else {
        navigator.geolocation.getCurrentPosition(setLocationData, setError);
      }
    } catch (error) {
      setError(error);
    }
  };

  return { locationData, error, getUserLocation };
};

export default useUserLocation;
