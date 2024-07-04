import styled, { keyframes, css } from "styled-components";

const paragrafsQueue = keyframes`
  0% {
    opacity: 0;
     transform: translateY(150px);
  }
    20% {
    opacity: 0.2;
    }
    50% {
    opacity: 0.8;
    }
  90% {
    opacity: 1;
  }
    100% {
        opacity: 1;
    transform: translateY(0);
    }
`;

export const OutputWrapper = styled.div`
  width: 700px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Paragraph = styled.p`
  font-size: 30px;
  font-weight: 900;
  color: gray;
  transform: translateY(150px);
  opacity: 0;
  text-align: center;
  animation: ${({ delay }) =>
    css`
      ${paragrafsQueue} 5s ease-out ${delay}s forwards
    `};
`;
