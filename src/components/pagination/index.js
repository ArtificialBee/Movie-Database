import styled from "styled-components";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

const PaginationWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`;

const CurrentPage = styled.h1`
  color: white;
`;

const Pagination = ({ currentPage, totalPages, changePage }) => {
  const arrowStyle = {
    color: "white",
    cursor: "pointer",
  };
  return (
    <PaginationWrapper>
      <BiCaretLeft
        onClick={() => changePage("dec")}
        size="30"
        style={arrowStyle}
      />
      <CurrentPage>{currentPage}</CurrentPage>
      <BiCaretRight
        onClick={() => changePage("inc")}
        size="30"
        style={arrowStyle}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
