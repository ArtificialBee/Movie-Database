import _axios from "../../config/api/apiKeyInstance";

export const getMovies = async () => {
  const { data } = await _axios.get("/movie/top_rated");
  return data;
};
