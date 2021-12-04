import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #214e77;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

const CardTitle = styled.div`
  width: 100%;
  height: 120px;
  background: yellow;
  background: linear-gradient(
    359.55deg,
    #000000 23.87%,
    rgba(0, 0, 0, 0) 99.54%
  );
`;

function ContentCard({ bgColor }) {
  return (
    <CardWrapper>
      <CardTitle></CardTitle>
    </CardWrapper>
  );
}

export default ContentCard;
