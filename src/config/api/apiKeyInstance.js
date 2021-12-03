import axios from "axios";

const _axios = axios.create({
  baseURL: "https://developers.themoviedb.org/3/",
  params: {
    "api-key": "16d93195fd8c47c238d40068d57c67be",
  },
});

export default _axios;
