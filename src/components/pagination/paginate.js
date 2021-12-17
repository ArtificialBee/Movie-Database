export const paginate = (action, currentPage, totalPages) => {
  switch (action) {
    case "inc":
      return currentPage === totalPages
        ? parseInt(currentPage)
        : parseInt(currentPage) + 1;

    case "dec":
      return currentPage === totalPages
        ? parseInt(currentPage)
        : parseInt(currentPage) - 1;
  }
};
