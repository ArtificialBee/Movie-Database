import React, { useState, useContext, createContext, useEffect } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { useDebounce } from "use-debounce/lib";

const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  max-width: 710px;
  height: 40px;
  margin: 40px auto 0 auto;
  border: 2px solid #265d8f};
  border-radius: 50px;
  padding-left: 14px;
  transition: all 0.3s linear;
  input,
  svg {
    color: #545454;
    transition: all 0.3s linear;
  }
  color: #545454;


  ${({ isFocused }) =>
    isFocused &&
    `
    input, svg {
        color: white;
    }
    color: white;
    border-color: #317abd; 
  `}
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  padding-left: 13px;
`;

function SearchInput({ placeholder, onSearch, value }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <InputWrapper
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
      >
        <BiSearchAlt size={25} />
        <Input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          value={value}
          placeholder={placeholder}
        ></Input>
      </InputWrapper>
    </>
  );
}

export default SearchInput;
