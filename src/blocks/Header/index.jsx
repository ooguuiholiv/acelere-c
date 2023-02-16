import react from "react";
import Logo from '../../assets/acelere-c.png'
import styled from "styled-components";

export const HContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    .title {
      display: flex;
      width: 70%;
      text-align: center;
      justify-content: center;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
      font-family: "Baumans", cursive;
      font-size: 2.5rem;
    }
    .subtitle {
      display: flex;
      width: 70%;
      text-align: center;
      justify-content: center;
      color: white;
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
    }
    .meet {
      button {
        font-family: "Roboto", sans-serif;
        width: 20vw;
        height: 7vh;
        font-size: 1.1rem;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 0.5rem;
        color: black;
        border: none;
        background: #ffc107;
        box-shadow: 7px 6px 62px -15px rgba(227, 227, 227, 0.52);
        transition: all ease-in 0.4s;
        cursor: pointer;
      }
      button:hover {
        border-radius: 1.3rem;
        transition: all ease-in 0.4s;
        background: #fec410;
        color: #f2f2f2;
      }
    }
  }
`;

export const Header = () => {
  return (
    <>
      <HContainer>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="title">
          <h2>Fique por dentro das maiores tendências do mundo digital</h2>
        </div>
        <div className="subtitle">
          <p>26, 27 e 28 de Janeiro de 2023 em Recife, Pernambuco</p>
        </div>
        <div className="meet">
          <button>Conheça o evento</button>
        </div>
      </HContainer>
    </>
  );
};
