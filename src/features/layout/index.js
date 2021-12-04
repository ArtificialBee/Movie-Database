import React from "react";
import styled from "styled-components";
import ContentCard from "../../components/Card";

const LayoutWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 70px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px 0 20px;
  }

  @media (max-width: 479px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Layout() {
  return (
    <LayoutWrapper>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </LayoutWrapper>
  );
}

export default Layout;
