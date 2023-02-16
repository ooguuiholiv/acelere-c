import React from 'react';

import styled from 'styled-components';

export const CounterContainer = styled.div`
  @media screen and (min-width: 1024px){
    width: 100vw;
    height: 25vh;
    background: #1A1A40;
  }
`;


export const Contador = () => {
    return (
        <>
        <CounterContainer>

        </CounterContainer>
        </>
    )
}