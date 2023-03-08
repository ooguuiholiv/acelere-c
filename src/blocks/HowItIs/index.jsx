import React from "react";

import Ic1 from '../../assets/icons/ic1.png'
import Ic2 from '../../assets/icons/ic2.png'
import Ic3 from '../../assets/icons/ic3.png'
import Ic4 from '../../assets/icons/ic4.png'
import Ic5 from '../../assets/icons/ic5.png'
import Ic6 from '../../assets/icons/ic6.png'

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
    padding-bottom: 2rem;
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
      
      span {
        color: var(--green-logo);
      }
    }
    #icons {
      
      display: flex;
      justify-content: center;
      margin-top: 4rem;
      gap: 10rem;
      
      .icons-box {
        
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
          background: transparent;
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
      
      span {
        color: var(--green-logo);
      }
    }
    #icons {
      
      display: flex;
      justify-content: center;
      margin-top: 4rem;
      gap: 10rem;
      
      .icons-box {
        
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
          background: transparent;
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
      
      span {
        color: var(--green-logo);
      }
    }
    #icons {
      
      display: flex;
      justify-content: center;
      margin-top: 4rem;
      gap: 5rem;
      
      .icons-box {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 15vw;
        gap: 0.2rem;
        p {
          text-align: center;
        }

        .icon {
          width: 15vw;
          height: 8vh;
          border-radius: 0.5rem;
          background: transparent;
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
            <span>Acelere-c </span>é o lugar certo para quem deseja:
          </p>
        </div>
        <div id="icons">
          <div className="icons-box">
            <div style={{width: '100%', height: 'inherit'}} className="icon">
              <img style={{width: '100%', borderRadius: '0.4rem'}} src={Ic1} alt="" />
            </div>
            <p>Crie interação, engajamento e networks</p>
          </div>
          <div className="icons-box">
            <div style={{width: '100%', height: 'inherit'}} className="icon">
            <img style={{width: '100%', borderRadius: '0.4rem'}} src={Ic2} alt="" />
            </div>
            <p>Aprender sistemas de vendas, processos e gestão que só o acelere-c é capaz de te oferecer</p>
          </div>
          <div className="icons-box">
            <div style={{width: '100%', height: 'inherit'}} className="icon">
            <img style={{width: '100%', borderRadius: '0.4rem'}} src={Ic3} alt="" />
            </div>
            <p>Aprenda inovar, captar clientes e multiplicar o faturamento da sua empresa</p>
          </div>
        </div>
        <div id="icons">
          <div className="icons-box">
            <div style={{width: '100%', height: 'inherit'}} className="icon">
            <img style={{width: '100%', borderRadius: '0.4rem'}} src={Ic4} alt="" />
            </div>
            <p>Desenvolva seu potencial empreendedor e conquiste novas habilidades</p>
          </div>
          <div className="icons-box">
            <div style={{width: '100%', height: 'inherit'}} className="icon">
            <img style={{width: '100%', borderRadius: '0.4rem'}} src={Ic5} alt="" />
            </div>
            <p>Tenha acesso a novas oportunidades para seus negócios nas redes sociais</p>
          </div>
          <div className="icons-box">
            <div style={{width: '100%', height: 'inherit'}} className="icon">
            <img style={{width: '100%', borderRadius: '0.4rem'}} src={Ic6} alt="" />
            </div>
            <p>Conecte com negócios e pessoas com propósito</p>
          </div>
        </div>
      </HowContainer>
    </>
  );
};
