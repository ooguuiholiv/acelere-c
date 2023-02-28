import React from "react";

import styled from "styled-components";

export const PresentationContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    color: white;
    font-family: "Roboto", sans-serif;

    #picture-presentation {
      width: 22.5%;
      .card {
        width: 100%;
        height: 75vh;
        border-radius: 0.8rem;
        background: #000;
        box-shadow: 0px 0px 25px var(--green-logo),
             -0px 0px 10px var(--green-logo);
}
      }
    }
    #text-presentation {
      width: 65%;
      display: flex;
      flex-direction: column;
      gap:2.2rem;

      #meet button{
        display: flex;
        width: 30vw;
        color: var(--green-logo);
        height: 8vh;
        border: 0.2rem solid var(--green-logo);
        background: transparent;
        border-radius: 1.5rem;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 4rem;        
        cursor: pointer;
      }
      .title{
        font-size: 45px;
        span{
            color: var(--green-logo);
        }
      }
      .subtitle{
        font-size: 25px;
        text-align: justify;
      }
    }
  }
`;

export const Presentation = () => {
  return (
    <>
      <PresentationContainer>
        <div id="picture-presentation">
          <div className="card">
            <div className="box"></div>
          </div>
        </div>
        <div id="text-presentation">
          <div className="title">
            Acelere-C é um evento que tem como <span>objetivo </span>
            fomentar o <span>empreendedorismo e a inovação</span> no Triângulo
            Mineiro.
          </div>
          <div className="subtitle">
            Nos dias 7,8 e 9 de Julho de 2023 teremos uma mega imersão com mais
            de 30 palestrantes renomados e bem sucedidos. Dentre eles estarão
            presentes, Flávio Augusto, Marcos Rossi e Rick Chester de renome
            internacional.
          </div>
          <div id="meet">
            <button>CONHEÇA OS PALESTRANTES</button>
          </div>
        </div>
      </PresentationContainer>
    </>
  );
};
