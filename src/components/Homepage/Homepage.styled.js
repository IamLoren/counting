import styled, { keyframes } from "styled-components";

const moveLight = keyframes`
    from {
        transform: translateX(-5em) skewX(-45deg);
    }
    to {
        transform: translateX(335px) skewX(-45deg);
    }
`;


export const StyledTitle = styled.h1`
  font-size: 36px;
  color: var(--secondary-text);
  text-align: center;
  margin-bottom: 100px;

  @media screen and (min-width: 767px) {
    font-size: 48px;
  }
`;
export const StyledForm = styled.form`
position: relative;
`

export const StyledDiv = styled.div`
    position: relative;
     width: 300px;
    height: 60px;
    margin: 0 auto 100px;

     &:before {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 100%;
        z-index: 10;
        background-color:  rgba(255, 255, 255, 0.2);
        transform: translateX(-5em) skewX(-45deg);
    }

    &:hover:before {
        animation: ${moveLight} 0.5s;
    }
`

export const StyledInput = styled.input`
    display:block;
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 50px;
    margin: 0 auto;
    opacity: 0;
    
`
export const StyledButton = styled.button`
  display: block;
  margin: -50px auto 0;
  background-color: var(--accent-color);
  font-size: 25px;
    color: white;
    padding: 15px 100px;
    border: none;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    pointer-events: none;

`;

export const StyledFileName = styled.p`
    position: absolute;
    top: 35%;
    left: 44%;
    width: 200px;
    text-align: center;
    color: red;
`

export const SendButton = styled.button`
display: block;
  margin: 0 auto 50px;
  background-color: var(--accent-text);
    color: white;
    font-size: 25px;
    padding: 15px 100px;
    border: none;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
`

export const StyledMessage = styled.p`
    text-align: center;
    font-size: 30px;
`