import React from "react";
import styled from "styled-components";
import Mail from "../../assets/mail.png";
import { Button, TextField } from "@mui/material";

export const NewsletterContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 40vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: "Roboto", sans-serif;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        h2 {
          font-size: 2rem;
        }

        img {
          width: 1.8vw;
        }
      }
      .subtitle {
        margin-top: 1rem;
      }
      .form {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        align-items: center;
        input {
          color: white;
        }
      }
      .info {
        margin-top: 0.5rem;
        font-weight: 200;
        text-align: center;
      }
    }
  }
`;

export const Newsletter = () => {
  return (
    <>
      <NewsletterContainer>
        <div className="content">
          <div className="title">
            <img src={Mail} alt="" />
            <h2>Newsletter</h2>
          </div>
          <div className="subtitle">
            <h4>
              Assine nossa newsletter e mantenha-se atualizado sobre nosso
              evento.
            </h4>
          </div>
          <div className="form">
            <TextField
              id="mail"
              label="E-mail"
              variant="outlined"
              color="info"
              focused
              style={{
                width: "30vw",
              }}
            />
            <Button variant="contained" style={{backgroundColor: 'var(--green-logo)', color: 'black'}}>
              Inscrever-se
            </Button>
          </div>
          <div className="info">
            <p>
              Ao submeter seu email você está nos dando permissão de lhe enviar
              e-mails. <br /> Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
      </NewsletterContainer>
    </>
  );
};
