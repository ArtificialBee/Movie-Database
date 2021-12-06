import _axios from "./apiKeyInstance";

export const getImageURL = async () => {
  const { data } = await _axios.get("/configuration");
  return data;
};
