import React from "react";

import styled from "styled-components";

export const PresentationContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    color: white;
    font-family: "Roboto", sans-serif;

    #picture-presentation {
      width: 22.5%;
      .card {
        width: 100%;
        height: 75vh;
        border-radius: 0.8rem;
        background: #000;
        box-shadow: 0px 0px 25px #ffc107,
             -0px 0px 10px #ffc107;
}
      }
    }
    #text-presentation {
      width: 65%;
      display: flex;
      flex-direction: column;
      gap:2.2rem;

      #meet button{
        display: flex;
        width: 30vw;
        color: #ffc107;
        height: 8vh;
        border: 0.2rem solid #ffc107;
        background: transparent;
        border-radius: 1.5rem;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 4rem;        
        cursor: pointer;
      }
      .title{
        font-size: 45px;
        span{
            color: #ffc107;
        }
      }
      .subtitle{
        font-size: 25px;
        text-align: justify;
      }
    }
  }
`;

export const Presentation = () => {
  return (
    <>
      <PresentationContainer>
        <div id="picture-presentation">
          <div className="card">
            <div className="box"></div>
          </div>
        </div>
        <div id="text-presentation">
          <div className="title">
            Lorem Ipsum is <span>simply dummy</span>
            text of the printing and <span>typesetting</span> industry. Lorem
            Ipsum.
          </div>
          <div className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div id="meet">
            <button>CONHEÇA OS PALESTRANTES</button>
          </div>
        </div>
      </PresentationContainer>
    </>
  );
};
