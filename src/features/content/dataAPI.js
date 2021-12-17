import _axios from "../../config/api/apiKeyInstance";

export const getData = async ({ endpoint, searchValue, page }) => {
  let params = { page: page }; //it works
  if (searchValue) {
    params.query = searchValue;
  }
  const { data } = await _axios.get(endpoint, { params: { ...params } });
  return data.results;
};
