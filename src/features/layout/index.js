import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentCard from "../../components/Card";
import { useImageURL } from "../../context/imageURLContext";

const LayoutWrapper = styled.div`
  width: 954px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  margin: 70px auto;

  @media (max-width: 767px) {
    grid-template-columns: repeat(5, 1fr);
    padding: 0 20px 0 20px;
  }

  @media (max-width: 479px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function Layout({ data }) {
  const imageURL = useImageURL();

  return (
    <>
      <LayoutWrapper>
        {data?.map((element) => {
          return (
            <ContentCard
              title={element.title || element.name}
              image_path={imageURL + element.poster_path}
              id={element.id}
            />
          );
        })}
      </LayoutWrapper>
    </>
  );
}

export default Layout;
