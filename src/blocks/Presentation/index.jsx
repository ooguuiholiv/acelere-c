import React from "react";
import Sombra from '../../assets/palestrantes/SombraFlavio2.png'
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
    #text-presentation {
      width: 65%;
      display: flex;
      flex-direction: column;
      gap: 2.2rem;

      #meet button {
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
      .title {
        font-size: 45px;
        span {
          color: var(--green-logo);
        }
      }
      .subtitle {
        font-size: 25px;
        text-align: justify;
      }
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    justify-content: space-around;
    align-items: start;
    padding-top: 5rem;
    padding-bottom: 5rem;
    gap: 1rem;
    color: white;
    font-family: "Roboto", sans-serif;

    #picture-presentation {
      width: 22.5%;
      .card {
        width: 100%;
        height: 30vh;
        border-radius: 0.8rem;
        background: #000;
        box-shadow: 0px 0px 25px var(--green-logo),
          -0px 0px 10px var(--green-logo);
      }
    }
    #text-presentation {
      width: 65%;
      display: flex;
      flex-direction: column;
      gap: 2.2rem;

      #meet button {
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
      .title {
        font-size: 2rem;
        span {
          color: var(--green-logo);
        }
      }
      .subtitle {
        font-size: 1.2rem;
        text-align: justify;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
    gap: 1.2rem;
    color: white;
    font-family: "Roboto", sans-serif;

    #picture-presentation {
      width: 45%;
      .card {
        width: 100%;
        height: 35vh;
        border-radius: 0.8rem;
        background: #000;
        box-shadow: 0px 0px 25px var(--green-logo),
          -0px 0px 10px var(--green-logo);
      }
    }
    #text-presentation {
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-left: auto;
      margin-right: auto;

      #meet button {
        display: flex;
        width: auto;
        color: var(--green-logo);
        height: 8vh;
        padding: 15px;
        border: 0.2rem solid var(--green-logo);
        background: transparent;
        border-radius: 1.5rem;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 0.5rem;
        cursor: pointer;
      }
      .title {
        font-size: 1.8rem;
        span {
          color: var(--green-logo);
        }
      }
      .subtitle {
        font-size: 1.2rem;
        text-align: center;
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
            <div style={{display: 'flex', width: '100%', height: '100%',alignItems: 'center', justifyContent: 'center'}} className="box">
              <img src={Sombra} style={{width: '100%', opacity: '0.25'}} alt="" />
            </div>
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
            <button>
              {" "}
              <a
                href="#"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                {" "}
                ADQUIRA SEU PASSAPORTE
              </a>
            </button>
          </div>
        </div>
      </PresentationContainer>
    </>
  );
};
