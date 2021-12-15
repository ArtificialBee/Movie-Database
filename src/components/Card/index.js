import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { OpacityKeyframe } from "../keyframes/keyframes";

const CardWrapper = styled.div`
  background-image: url(${({ image_path }) => image_path});
  background-size: cover;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  opacity: 0;
  animation: ${OpacityKeyframe} 0.5s linear ${({ delay }) => delay}ms forwards;
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
  font-size: 1rem;
  color: white;
`;

function ContentCard({ id, title, image_path, delay }) {
  if (title.length > 30) {
    const oldTitle = title;
    title = oldTitle.slice(0, 30) + "...";
  }

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`${pathname}/${id}`);
  };
  return (
    <CardWrapper
      image_path={image_path}
      delay={delay}
      onClick={() => navigateToDetails()}
    >
      <CardTitleBox>
        <CardTitle>{title}</CardTitle>
      </CardTitleBox>
    </CardWrapper>
  );
}

export default ContentCard;
