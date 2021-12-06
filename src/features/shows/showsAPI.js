import _axios from "../../config/api/apiKeyInstance";

export const getShows = async () => {
  const { data } = await _axios.get("/tv/top_rated");
  return data;
};
