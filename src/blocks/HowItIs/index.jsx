import React from "react";

import styled from "styled-components";

export const HowContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 155vh;
    background: linear-gradient(127.38deg, #000000 21.5%, #1a1a40 95.62%);
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    #title {
      margin-top: 2rem;
      font-size: 2.4rem;
    }
    #subtitle {
      font-size: 1.4rem;
    }
    #cards {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-top: 4rem;

      .card {
        width: 20vw;
        height: 20vh;
        background: #ffc107;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
      }
    }
    #text {
      margin-top: 2rem;
      font-size: 1.3rem;
      span {
        color: #ffc107;
      }
    }
    #icons{
        display: flex;
        justify-content: center;
        margin-top: 4rem;
        gap: 10rem;

        .icons-box{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 10vw;
            gap: 0.5rem;
            p{
                text-align: center;
            }

            .icon{
                width: 10vw;
                height: 20vh;
                border-radius: 0.5rem;
                background: #f2f2f2;
            }
        }
    }
  }
`;

export const HowItIs = () => {
  return (
    <>
      <HowContainer>
        <div id="title">
          <h2>Lorem Ipsum</h2>
        </div>
        <div id="subtitle">
          <h4>
            We don’t serve their kind here! What? Your droids. They’ll have to
            wait outside. We don’t want them here.
          </h4>
        </div>
        <div id="cards">
          <div className="card">
            <span>Alguma informação</span>
          </div>
          <div className="card">
            <span>Alguma informação</span>
          </div>
          <div className="card">
            <span>Alguma informação</span>
          </div>
        </div>
        <div id="text">
          <p>
            <span>Acelere-c </span>é We don’t serve their kind here! What?
          </p>
        </div>
        <div id="icons">
          <div className="icons-box">
            <div className="icon"></div>
            <p>Algum icone necessario com informação</p>
          </div>
          <div className="icons-box">
            <div className="icon"></div>
            <p>Algum icone necessario com informação</p>
          </div>
          <div className="icons-box">
            <div className="icon"></div>
            <p>Algum icone necessario com informação</p>
          </div>
        </div>
        <div id="icons">
          <div className="icons-box">
            <div className="icon"></div>
            <p>Algum icone necessario com informação</p>
          </div>
          <div className="icons-box">
            <div className="icon"></div>
            <p>Algum icone necessario com informação</p>
          </div>
          <div className="icons-box">
            <div className="icon"></div>
            <p>Algum icone necessario com informação</p>
          </div>
        </div>
      </HowContainer>
    </>
  );
};
