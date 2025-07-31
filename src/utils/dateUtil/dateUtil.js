const getTimeByUnix = (time, timezone = "en-US", is24Hour = false) => {
  return new Date(time * 1000).toLocaleTimeString(timezone, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !is24Hour,
  });
};

const dateUtil = {
  getTimeByUnix,
};

export default dateUtil;
