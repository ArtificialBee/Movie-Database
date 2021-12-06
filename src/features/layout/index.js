import React, { useEffect } from "react";
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

function Layout({ data }) {
  useEffect(() => {
    console.log("UNUTAR LAYOUTA -> ", data);
  }, [data]);

  return (
    <LayoutWrapper>
      {data?.map((element) => {
        return <ContentCard title={element.title || element.name} />;
      })}
    </LayoutWrapper>
  );
}

export default Layout;
