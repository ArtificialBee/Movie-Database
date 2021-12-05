import dataAxios from "../../config/api/apiKeyInstance";
import { useQuery } from "react-query";

export default function useFetchData(endopint) {
  const fetchData = async () => {
    const response = await dataAxios.get(endopint);
    return response;
  };

  const { data, dataStatus } = useQuery("data", fetchData);

  return [data, dataStatus];
}
