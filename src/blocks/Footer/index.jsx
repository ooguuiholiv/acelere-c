import React from "react";
import styled from "styled-components";
import Acelere from "../../assets/acelere-c.png";
import Wpp from "../../assets/wpp.svg";
import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";
export const FooterContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 35vh;
    background: linear-gradient(127.38deg, #000000 21.5%, #1a1a40 95.62%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-family: "Roboto", sans-serif;
    .content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 4rem;
      width: 100%;

      .logo {
        width: 25%;
        img {
          width: 100%;
        }
      }
      .endereco {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h3 {
          text-transform: uppercase;
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          font-weight: 100;
        }
      }
      .fale-conosco {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        h3 {
          font-size: 1rem;
          text-transform: uppercase;
        }
        p {
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          img {
            width: 1.5vw;
          }
        }
      }
      .redes-sociais {
        width: 25%;
      }
    }
    .footer {
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 100%;
    height: 100%;
    background: linear-gradient(127.38deg, #000000 21.5%, #1a1a40 95.62%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-family: "Roboto", sans-serif;
    .content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 2rem;
      width: 100%;

      .logo {
        width: 25%;
        img {
          width: 100%;
        }
      }
      .endereco {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h3 {
          text-transform: uppercase;
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          font-weight: 100;
        }
      }
      .fale-conosco {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        h3 {
          font-size: 1rem;
          text-transform: uppercase;
        }
        p {
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          img {
            width: 1.5vw;
          }
        }
      }
      .redes-sociais {
        width: 25%;
      }
    }
    .footer {
      margin-bottom: 0.5rem;
      margin-top: 2rem;
      p{
        text-align: center;
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background: linear-gradient(127.38deg, #000000 21.5%, #1a1a40 95.62%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-family: "Roboto", sans-serif;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 0.2rem;
      width: 100%;

      .logo {
        width: 70%;
        img {
          width: 100%;
        }
      }
      .endereco {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        h3 {
          text-transform: uppercase;
          font-size: 1.2rem;
        }
        p {
          font-size: 1rem;
          font-weight: 100;
        }
      }
      .fale-conosco {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        h3 {
          font-size: 1.2rem;
          text-transform: uppercase;
        }
        p {
          font-size: 1rem;
          font-weight: 200;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          img {
            width: 5vw;
          }
        }
      }
      .redes-sociais {
        width: 25%;
      }
    }
    .footer {
      margin-bottom: 0.5rem;
      margin-top: 2rem;
      p{
        text-align: center;
        font-size: 1rem;
      }
    }
  }
`;

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="content">
          <div className="logo">
            <img src={Acelere} alt="" />
          </div>
          <div className="endereco">
            <h3>Endereço</h3>
            <p>Av. 15, 798 - Centro, Ituiutaba - MG, 38300-134</p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="fale-conosco">
            <h3>Fale Conosco</h3>
            <p>
              <img src={Wpp} alt="" /> +55 34 99999-9999
            </p>
            <p>
              <img src={Phone} alt="" /> +55 34 99999-9999
            </p>
            <p>
              <img src={Mail} alt="" /> mail@mail.com.br
            </p>
          </div>
        </div>
        <div className="footer">
          <p>
            © Copyright Shopdin. Todos os direitos reservados | Desenvolvido por
            Oguuiholiv
          </p>
        </div>
      </FooterContainer>
    </>
  );
};
