import styled from 'styled-components';
import {backgroundColor} from "../UI/variables"

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 70px;
  position: relative;
  overflow-x: hidden;
  margin-top: -4rem;

  @keyframes animate {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 100%;
    }
  }
`;

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./white_wave.png');
  background-size: 50% 100%;

  &:nth-child(1) {
    animation: animate 5s linear infinite;
    z-index: 3;
  }
  &:nth-child(2) {
    animation: animate 13s reverse linear infinite;
    z-index: 2;
    opacity: 0.7;
  }
  &:nth-child(3) {
    animation: animate 20s linear infinite;
    z-index: 1;
    opacity: 0.4;
  }

  @media (min-width: 900px) {
    background-size: 50% 100%;
  }

`;

const WaveContainer = () => (
  <Container>
    <Wave />
    <Wave />
    <Wave />
  </Container>
);

export default WaveContainer;