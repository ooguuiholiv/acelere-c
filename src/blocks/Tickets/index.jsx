import React from "react";

import styled from "styled-components";

export const TicketContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    background: black;
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 5rem;

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
        background: var(--green-logo);
        border: none;
      }
    }
    #card-buy {
      display: flex;
      align-items: start;
      justify-content: center;
      gap: 3rem;
      .card_box_smart {
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 1rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }

        width: 14vw;
        height: 49vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 1.1rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }

        width: 14vw;
        height: 56vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 0.6rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }

        width: 14vw;
        height: 65vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 0.6rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }
        width: 14vw;
        height: 76vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 100%;
    height: 100%;
    background: black;
    padding-bottom: 4rem;
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
        background: var(--green-logo);
        border: none;
      }
    }
    .info_card p {
      font-size: 0.8rem;
    }
    #card-buy {
      width: 85%;
      display: flex;
      align-items: start;
      justify-content: center;
      gap: 2rem;
      .card_box_smart {
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 2rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }

        width: 20vw;
        height: 47vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 2.2rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }

        width: 20vw;
        height: 53vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 1.1rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }

        width: 20vw;
        height: 60vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 1.15rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }
        width: 20vw;
        height: 70vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background: black;
    padding-bottom: 4rem;
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    #title h2 {
      text-transform: uppercase;
      font-size: 1.5rem;
      margin-top: 1.5rem;
      text-align: center;
    }

    #subtitle {
      font-size: 1.2rem;
      text-align: center;

      hr {
        width: 70px;
        height: 7px;
        background: var(--green-logo);
        border: none;
      }
    }
    .info_card p {
      font-size: 0.8rem;
    }
    #card-buy {
      width: 85%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      .card_box_smart {
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 2rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }

        width: 50vw;
        height: 40vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 2rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }

        width: 50vw;
        height: 50vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 1.5rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }

        width: 50vw;
        height: 63vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
        .info_card {
          margin: 0.5rem;
          display: flex;
          flex-direction: column;
          height: 90%;
          justify-content: end;
          gap: 1.5rem;
          p {
            font-family: "Roboto", sans-serif;
            text-align: right;
          }
        }
        width: 50vw;
        height: 73vh;
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
          var(--green-logo) 0%,
          var(--green-logo) 51%,
          var(--green-logo) 100%
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
          <h2>ADQUIRA SEU PASSAPORTE</h2>
        </div>
        <div id="subtitle">
          <p>
            Vendas do 1º lote no escuro
          </p>
          <hr />
        </div>
        <div id="card-buy">
          {/* <div className="card_box_smart">
            <span></span>
            <div className="info_card">
              <p>Acesso a todas as palestras </p>
              <p>Assento na área superior </p>
              <p>Kit Network</p>
              <p>Smart Certificado de Participação</p>
            </div>
            <button
              style={{
                width: "inherit",
                background: "var(--green-logo)",
                border: "none",
                borderRadius: "0.3rem",
                height: "5vh",
                fontFamily: "Roboto, sans-serif",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ADQUIRA SEU PASSAPORTE
            </button>
          </div> */}
          <div className="card_box_vip">
            <span></span>
            <div className="info_card">
              <p>Acesso a todas as palestras</p>
              <p>Assento na área inferior</p>
              <p>Acesso à gravação do evento</p>
              <p>Kit Network Vip</p>
              <p>Certificado de Participação</p>
            </div>
            <button
              style={{
                width: "inherit",
                background: "var(--green-logo)",
                border: "none",
                borderRadius: "0.3rem",
                height: "5vh",
                fontFamily: "Roboto, sans-serif",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ADQUIRA SEU PASSAPORTE
            </button>
          </div>
          <div className="card_box_premium">
            <span></span>
            <div className="info_card">
              <p>Acesso a todas as palestras</p>
              <p>Acesso a área exclusiva</p>
              <p>Acesso à gravação do evento</p>
              <p>Kit Network Premium</p>
              <p>Sessão Premium (próximo ao palco)</p>
              <p>Acesso ao Lounge Premium</p>
              <p>Almoço exclusivo nos três dias do evento</p>
              <p>Certificado de Participação</p>
            </div>
            <button
              style={{
                width: "inherit",
                background: "var(--green-logo)",
                border: "none",
                borderRadius: "0.3rem",
                height: "5vh",
                fontFamily: "Roboto, sans-serif",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ADQUIRA SEU PASSAPORTE
            </button>
          </div>
          <div className="card_box_prime">
            <span></span>
            <div className="info_card">
              <p>Acesso a todas as palestras</p>
              <p>Acesso a área exclusiva</p>
              <p>Acesso à gravação do evento</p>
              <p>Kit Network Premium</p>
              <p>Sessão Premium (próximo ao palco)</p>
              <p>Acesso ao Lounge Premium</p>
              <p>Almoço exclusivo nos três dias do evento</p>
              <p>
                Participação no Jantar Network Prime, evento <br />
                exclusivo 8/11
              </p>
              <p>Certificado de Participação</p>
            </div>
            <button
              style={{
                width: "inherit",
                background: "var(--green-logo)",
                border: "none",
                borderRadius: "0.3rem",
                height: "5vh",
                fontFamily: "Roboto, sans-serif",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ADQUIRA SEU PASSAPORTE
            </button>
          </div>
        </div>
      </TicketContainer>
    </>
  );
};
