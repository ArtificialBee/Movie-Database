import React, { useState } from "react";
import SearchInput from "./searchInput";

const Search = ({ placeholder, endpoint, children }) => {
  return (
    <>
      <SearchInput placeholder={placeholder} endpoint={endpoint}>
        {children}
      </SearchInput>
    </>
  );
};

export default Search;
