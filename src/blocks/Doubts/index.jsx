import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

export const DoubtContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
    background: black;
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    #title {
      margin-top: 4rem;
      font-size: 2.2rem;
      hr {
        width: 70px;
        height: 7px;
        border: none;
        background: var(--green-logo);
      }
    }
    #doubts {
      margin-top: 3rem;
      width: 90%;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 100%;
    height: 100%;
    background: black;
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 4rem;
    #title {
      margin-top: 4rem;
      font-size: 2.2rem;
      hr {
        width: 70px;
        height: 7px;
        border: none;
        background: var(--green-logo);
      }
    }
    #doubts {
      margin-top: 3rem;
      width: 90%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background: black;
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 4rem;
    #title {
      margin-top: 4rem;
      font-size: 1.5rem;
      hr {
        width: 70px;
        height: 7px;
        border: none;
        background: var(--green-logo);
      }
    }
    #doubts {
      margin-top: 3rem;
      width: 90%;
    }
  }
`;

export const Doubt = () => {
  return (
    <>
      <DoubtContainer>
        <div id="title">
          <h2>Tire suas dúvidas</h2>
          <hr />
        </div>
        <div id="doubts">
          <Accordion
            style={{
              background: "#222222",
              color: "white",
              width: "100%",
              marginTop: "0.2rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>O que devo levar?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Para participar do Acelere-C 2023 é necessário apresentar um
                documento oficial com foto e o ingresso, impresso ou digital
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              background: "#222222",
              color: "white",
              width: "100%",
              marginTop: "0.2rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Como será o credenciamento?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                O credenciamento será realizado um dia antes e no dia do evento.
                O espaço ficará sinalizado na entrada do evento.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              background: "#222222",
              color: "white",
              width: "100%",
              marginTop: "0.2rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Terá praça de alimentação?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                O Acelere-C contará com algumas áreas dedicadas à alimentação.
                Além de lanchonetes espalhadas pelo local, também contaremos com
                algumas franquias de restaurantes no local do evento.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              background: "#222222",
              color: "white",
              width: "100%",
              marginTop: "0.2rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Terá certificado?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Independente do tipo de ingresso escolhido, você terá direito ao
                certificado de participação.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              background: "#222222",
              color: "white",
              width: "100%",
              marginTop: "0.2rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Como posso organizar a minha viagem?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                O Acelere-C tem pacotes exclusivos em alguns planos e parceiro
                dos melhores hoteis da cidade. Você pode contar com ajuda a
                hospedagem. Entre em contato com o WhatsApp 34 99868-0000 ou
                pelo e-mail comercial@acelere-c.com.br.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              background: "#222222",
              color: "white",
              width: "100%",
              marginTop: "0.2rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Como funciona o Prime Plus?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Com o Prime Plus você terá direito a uma experiência exclusiva
                em um evento extra do Acelere-C. Você poderá participar de
                atividades exclusivas e acesso aos palestrantes com uma grande
                estrutura prepara especial para voc~e Prime Plus.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </DoubtContainer>
    </>
  );
};
