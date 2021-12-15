export const deleteQuery = (searchParams, param) => {
  searchParams.delete(param);
  return searchParams.toString();
};
