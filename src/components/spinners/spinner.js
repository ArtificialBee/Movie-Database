import styled from "styled-components";
import { MovingKeyframe } from "../keyframes/keyframes";
// import Lottie from "lottie-react";
// import * as animationData from "../../assets/animations/example.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animations/spinner.json";

const SpinnerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingSpinner = (size) => {
  return (
    <SpinnerWrapper>
      <Player
        autoplay
        loop
        src={animation}
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </SpinnerWrapper>
  );
};
