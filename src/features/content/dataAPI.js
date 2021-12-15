import _axios from "../../config/api/apiKeyInstance";

export const getData = async ({ endpoint, searchValue }) => {
  let params = {};
  if (searchValue) {
    params = { query: searchValue };
  }
  const { data } = await _axios.get(endpoint, { params: { ...params } });
  console.log("[getData] ->", data);
  return data.results;
};
