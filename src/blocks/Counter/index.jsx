import React from "react";
import styled from "styled-components";
import Counter from "../../components/Counter";
import useCountdown from "./../../hooks/useCountdown";

export const CounterContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 25vh;
    background: #1a1a40;
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
