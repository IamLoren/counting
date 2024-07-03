import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Confetti from 'react-confetti';
import {
  StyledGreeting,
  StyledGreetingTitle,
  StyledGreetingWrapper,
} from './Result.styled';

export const Result = ({ progress, message, setModal, data }) => {
  const [percents, setPercents] = useState(1);
  const width = window.innerWidth - 5;
  const height = window.innerHeight - 50;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (percents < progress) {
        setPercents((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 200);
    return () => clearInterval(intervalId);
  }, [percents, progress]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModal(false);
    }, 20000);
    return () => clearTimeout(timeoutId);
  }, [setModal]);


  return (
    <StyledGreeting>
      <StyledGreetingTitle>
        {message}!
      </StyledGreetingTitle>
      <Confetti width={width} height={height} />
      <StyledGreetingWrapper>
        <CircularProgressbar
          strokeWidth={8}
          value={percents}
          text={`${percents} %`}
          styles={buildStyles({
            strokeLinecap: 'circle',
            textColor: `${percents < 60 ? `var(--accent-text)` : 'green'}`,
            textSize: '16px',
            textWeight: '900',
            pathColor: `${percents < 60 ? `var(--accent-text)` : 'green'}`,
            trailColor: `${percents === 0 ? 'lightgray' : 'transparent'}`,
            backgroundColor: 'transparent',
          })}
        />
      </StyledGreetingWrapper>
    </StyledGreeting>
  );
};

export default Result;
