import React from "react";
import styled from "styled-components";
import Counter from "../../components/Counter";
import useCountdown from "./../../hooks/useCountdown";

export const CounterContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 25vh;
    background: #1a1a40;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #86ee39;
  }
  @media screen and (min-width: 769px) and (max-width: 1023px){
    width: 100%;
    height: 25vh;
    background: #1a1a40;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #86ee39;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    height: 100%;
    background: #1a1a40;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #86ee39;
  }
`;

export const Contador = () => {
  const [day, hour, minute, second] = useCountdown("Jul 7, 2023 00:00:00");
  return (
    <>
      <CounterContainer>
        <Counter title="dias" number={day} />
        <Counter title="horas" number={hour} />
        <Counter title="minutos" number={minute} />
        <Counter title="segundos" number={second} />
      </CounterContainer>
    </>
  );
};
