import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-image: url(${({ image_path }) => image_path});
  background-size: cover;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

const CardTitleBox = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  background: linear-gradient(
    359.55deg,
    #000000 23.87%,
    rgba(0, 0, 0, 0) 99.54%
  );
`;

const CardTitle = styled.h1`
  position: absolute;
  bottom: 13px;
  left: 15px;
  font-weight: 400;
  font-size: 1.1rem;
  color: white;
`;

function ContentCard({ title, image_path }) {
  if (title.length > 30) {
    const oldTitle = title;
    title = oldTitle.slice(0, 30) + "...";
  }
  return (
    <CardWrapper image_path={image_path}>
      <CardTitleBox>
        <CardTitle>{title}</CardTitle>
      </CardTitleBox>
    </CardWrapper>
  );
}

export default ContentCard;
