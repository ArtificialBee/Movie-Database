export const searchParameters = {
  placeholder: "",
  endpoint: "",
};

export default function searchReducer(state, action) {
  switch (action.type) {
    case "movies":
      return {
        ...state,
        placeholder: "Search for movies...",
        endpoint: "/search/movie",
      };
    case "shows":
      return {
        ...state,
        placeholder: "Search for shows...",
        endpoint: "/search/tv",
      };
    default:
      return state;
  }
}
