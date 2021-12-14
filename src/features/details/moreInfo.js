import styled from "styled-components";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

const ChildrenWrapper = styled.div`
  margin-left: 10px;
`;

export default function MoreInfo({ icon, children }) {
  return (
    <InfoWrapper>
      {icon}
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </InfoWrapper>
  );
}
