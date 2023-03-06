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
    #doubts{
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
    #doubts{
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
    #doubts{
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
          <Accordion style={{background: '#222222', color: 'white', width: '100%', marginTop: '0.2rem'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Pergunta 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                resposta da pergunta feita pelo usuario
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{background: '#222222', color: 'white', width: '100%', marginTop: '0.2rem'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Pergunta 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                resposta da pergunta feita pelo usuario
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{background: '#222222', color: 'white', width: '100%', marginTop: '0.2rem'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Pergunta 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                resposta da pergunta feita pelo usuario
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{background: '#222222', color: 'white', width: '100%', marginTop: '0.2rem'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Pergunta 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                resposta da pergunta feita pelo usuario
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{background: '#222222', color: 'white', width: '100%', marginTop: '0.2rem'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Pergunta 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                resposta da pergunta feita pelo usuario
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{background: '#222222', color: 'white', width: '100%', marginTop: '0.2rem'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Pergunta 6</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                resposta da pergunta feita pelo usuario
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </DoubtContainer>
    </>
  );
};
