import _axios from "../../config/api/apiKeyInstance";

export const getDetails = async (content, id) => {
  const { data } = await _axios(`${content}/${id}`);
  return data;
};
