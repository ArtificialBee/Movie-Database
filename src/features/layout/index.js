import React from "react";
import styled from "styled-components";
import ContentCard from "../../components/Card";

const LayoutWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 70px;
`;

function Layout({ layoutData }) {
  return (
    <LayoutWrapper>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </LayoutWrapper>
  );
}

export default Layout;
