import React from "react";

import styled from "styled-components";

export const HowContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
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
        background: var(--green-logo);
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        font-family: "Roboto", sans-serif;
        gap: 0.3rem;
        p {
          font-size: 1.2rem;
          font-weight: 300;
          color:#3d3d3d;
        }
        span {
          font-size: 3rem;
          color: white;
          font-weight: bold;
        }
      }
    }
    #text {
      margin-top: 2rem;
      font-size: 1.3rem;
      visibility: collapse;
      span {
        color: var(--green-logo);
      }
    }
    #icons {
      visibility: collapse;
      display: flex;
      justify-content: center;
      margin-top: 4rem;
      gap: 10rem;
      
      .icons-box {
        visibility: collapse;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 10vw;
        gap: 0.5rem;
        p {
          text-align: center;
        }

        .icon {
          width: 10vw;
          height: 20vh;
          border-radius: 0.5rem;
          background: #f2f2f2;
        }
      }
    }
  }
  @media screen and (min-width: 769px) and (max-width:1023px) {
    width: 100%;
    height: 100%;
    background: linear-gradient(127.38deg, #000000 21.5%, #1a1a40 95.62%);
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-bottom: 5rem;
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
        background: var(--green-logo);
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: black;
        font-family: "Roboto", sans-serif;
        gap: 0.3rem;
        p {
          font-size: 1.2rem;
          font-weight: 300;
          color:#3d3d3d;
          text-align:center;
        }
        span {
          font-size: 1.5rem;
          color: white;
          font-weight: bold;
        }
      }
    }
    #text {
      margin-top: 2rem;
      font-size: 1.3rem;
      visibility: collapse;
      span {
        color: var(--green-logo);
      }
    }
    #icons {
      visibility: collapse;
      display: flex;
      justify-content: center;
      margin-top: 4rem;
      gap: 10rem;
      
      .icons-box {
        visibility: collapse;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 10vw;
        gap: 0.5rem;
        p {
          text-align: center;
        }

        .icon {
          width: 10vw;
          height: 8vh;
          border-radius: 0.5rem;
          background: #f2f2f2;
        }
      }
    }
  }
  @media screen and (max-width:768px) {
    width: 100%;
    height: 100%;
    background: linear-gradient(127.38deg, #000000 21.5%, #1a1a40 95.62%);
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-bottom: 5rem;
    #title {
      margin-top: 1.5rem;
      font-size: 2.4rem;
    }
    #subtitle {
      font-size: 1.2rem;
      text-align: center;
    }
    #cards {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 4rem;

      .card {
        width: 28vw;
        height: 20vh;
        background: var(--green-logo);
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: black;
        font-family: "Roboto", sans-serif;
        gap: 0.3rem;
        p {
          font-size: 1.1rem;
          font-weight: 300;
          color:#3d3d3d;
          text-align:center;
        }
        span {
          font-size: 1.3rem;
          color: white;
          font-weight: bold;
        }
      }
    }
    #text {
      margin-top: 2rem;
      font-size: 1.3rem;
      text-align: center;
      visibility: collapse;
      span {
        color: var(--green-logo);
      }
    }
    #icons {
      visibility: collapse;
      display: flex;
      justify-content: center;
      margin-top: 4rem;
      gap: 5rem;
      
      .icons-box {
        visibility: collapse;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 5vw;
        gap: 0.2rem;
        p {
          text-align: center;
        }

        .icon {
          width: 15vw;
          height: 8vh;
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
          <h2>Nossos Números</h2>
        </div>
        <div id="subtitle">
          <h4>Conhecimento, tempo de qualidade, negócios e muito network.</h4>
        </div>
        <div id="cards">
          <div className="card">
            <span>+30</span>
            <p> palestrantes</p>
          </div>
          <div className="card">
            <span>52 </span>
            <p> horas de conteúdo</p>
          </div>
          <div className="card">
            <span>15</span> <p> Parceiros com Stands</p>
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
