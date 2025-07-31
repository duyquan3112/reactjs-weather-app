import axios from "axios";

export const handleError = (error) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || "Something went wrong";
  }
  return "Something went wrong";
};
