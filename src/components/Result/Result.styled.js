import styled from 'styled-components';
import '../../css/variables.css';

export const StyledGreeting = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 99vw;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: var(--greeting-bg-color);

  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
`;

export const StyledGreetingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80%;

  @media screen and (min-width: 1440px) {
    width: 15%;
    height: 15%;
  }
`;

export const StyledGreetingTitle = styled.h1`
  font-size: 36px;
  color: var(--secondary-text);
  text-align: center;

  @media screen and (min-width: 767px) {
    font-size: 48px;
  }
`;

