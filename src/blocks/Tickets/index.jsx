import React from "react";

import styled from "styled-components";

export const TicketContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
    background: black;
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    #title h2 {
      text-transform: uppercase;
      font-size: 2.4rem;
      margin-top: 1.5rem;
    }

    #subtitle {
      font-size: 1.8rem;
      text-align: center;

      hr {
        width: 70px;
        height: 7px;
        background: #ffc107;
        border: none;
      }
    }
    #card-buy {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      .card_box_smart {
        width: 200px;
        height: 350px;
        border-radius: 20px;
        background: linear-gradient(
          170deg,
          rgba(58, 56, 56, 0.623) 0%,
          rgb(31, 31, 31) 100%
        );
        position: relative;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
        cursor: pointer;
        transition: all 0.3s;
      }

      .card_box_smart:hover {
        transform: scale(0.9);
      }

      .card_box_smart span {
        position: absolute;
        overflow: hidden;
        width: 150px;
        height: 150px;
        top: -10px;
        left: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card_box_smart span::before {
        content: "smart";
        position: absolute;
        width: 150%;
        height: 40px;
        background-image: linear-gradient(
          45deg,
          #ff6547 0%,
          #ffb144 51%,
          #ff7053 100%
        );
        transform: rotate(-45deg) translateY(-20px);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
      }

      .card_box_smart span::after {
        content: "";
        position: absolute;
        width: 10px;
        bottom: 0;
        left: 0;
        height: 10px;
        z-index: -1;
        box-shadow: 140px -140px #cc3f47;
        background-image: linear-gradient(
          45deg,
          #ff512f 0%,
          #f09819 51%,
          #ff512f 100%
        );
      }
      .card_box_vip {
        width: 200px;
        height: 350px;
        border-radius: 20px;
        background: linear-gradient(
          170deg,
          rgba(58, 56, 56, 0.623) 0%,
          rgb(31, 31, 31) 100%
        );
        position: relative;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
        cursor: pointer;
        transition: all 0.3s;
      }

      .card_box_vip:hover {
        transform: scale(0.9);
      }

      .card_box_vip span {
        position: absolute;
        overflow: hidden;
        width: 150px;
        height: 150px;
        top: -10px;
        left: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card_box_vip span::before {
        content: "vip";
        position: absolute;
        width: 150%;
        height: 40px;
        background-image: linear-gradient(
          45deg,
          #ff6547 0%,
          #ffb144 51%,
          #ff7053 100%
        );
        transform: rotate(-45deg) translateY(-20px);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
      }

      .card_box_vip span::after {
        content: "";
        position: absolute;
        width: 10px;
        bottom: 0;
        left: 0;
        height: 10px;
        z-index: -1;
        box-shadow: 140px -140px #cc3f47;
        background-image: linear-gradient(
          45deg,
          #ff512f 0%,
          #f09819 51%,
          #ff512f 100%
        );
      }
      .card_box_premium {
        width: 200px;
        height: 350px;
        border-radius: 20px;
        background: linear-gradient(
          170deg,
          rgba(58, 56, 56, 0.623) 0%,
          rgb(31, 31, 31) 100%
        );
        position: relative;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
        cursor: pointer;
        transition: all 0.3s;
      }

      .card_box_premium:hover {
        transform: scale(0.9);
      }

      .card_box_premium span {
        position: absolute;
        overflow: hidden;
        width: 150px;
        height: 150px;
        top: -10px;
        left: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card_box_premium span::before {
        content: "premium";
        position: absolute;
        width: 150%;
        height: 40px;
        background-image: linear-gradient(
          45deg,
          #ff6547 0%,
          #ffb144 51%,
          #ff7053 100%
        );
        transform: rotate(-45deg) translateY(-20px);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
      }

      .card_box_premium span::after {
        content: "";
        position: absolute;
        width: 10px;
        bottom: 0;
        left: 0;
        height: 10px;
        z-index: -1;
        box-shadow: 140px -140px #cc3f47;
        background-image: linear-gradient(
          45deg,
          #ff512f 0%,
          #f09819 51%,
          #ff512f 100%
        );
      }
      .card_box_prime {
        width: 200px;
        height: 350px;
        border-radius: 20px;
        background: linear-gradient(
          170deg,
          rgba(58, 56, 56, 0.623) 0%,
          rgb(31, 31, 31) 100%
        );
        position: relative;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
        cursor: pointer;
        transition: all 0.3s;
      }

      .card_box_prime:hover {
        transform: scale(0.9);
      }

      .card_box_prime span {
        position: absolute;
        overflow: hidden;
        width: 150px;
        height: 150px;
        top: -10px;
        left: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card_box_prime span::before {
        content: "prime";
        position: absolute;
        width: 150%;
        height: 40px;
        background-image: linear-gradient(
          45deg,
          #ff6547 0%,
          #ffb144 51%,
          #ff7053 100%
        );
        transform: rotate(-45deg) translateY(-20px);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
      }

      .card_box_prime span::after {
        content: "";
        position: absolute;
        width: 10px;
        bottom: 0;
        left: 0;
        height: 10px;
        z-index: -1;
        box-shadow: 140px -140px #cc3f47;
        background-image: linear-gradient(
          45deg,
          #ff512f 0%,
          #f09819 51%,
          #ff512f 100%
        );
      }
    }
  }
`;

export const Ticket = () => {
  return (
    <>
      <TicketContainer>
        <div id="title">
          <h2>compre seu ingresso</h2>
        </div>
        <div id="subtitle">
          <p>
            Adquira agora o seu passaporte para o maior festival de
            *****************l e <br /> empreendedorismo da América Latina
          </p>
          <hr />
        </div>
        <div id="card-buy">
          <div className="card_box_smart">
            <span></span>
          </div>
          <div className="card_box_vip">
            <span></span>
          </div>
          <div className="card_box_premium">
            <span></span>
          </div>
          <div className="card_box_prime">
            <span></span>
          </div>
        </div>
      </TicketContainer>
    </>
  );
};
