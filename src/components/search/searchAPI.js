import _axios from "../../config/api/apiKeyInstance";

const searchAPI = async (formData) => {
  const { query, endpoint } = formData;
  console.log("POZVAO SAM APIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
  const { data } = await _axios.get(endpoint, {
    params: {
      query: `${query}`,
    },
  });
  return data;
};

export default searchAPI;
