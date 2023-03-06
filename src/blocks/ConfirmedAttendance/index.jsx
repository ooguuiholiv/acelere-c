import React from "react";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

import User1 from "../../assets/user1.jpg";
import User2 from "../../assets/user2.jpg";
import User3 from "../../assets/user3.jpg";
import User4 from "../../assets/user4.jpg";
import Slider from "../../services/Slider";

export const ConfirmedContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    background: black;
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;

    #title h2 {
      font-size: 40px;
      text-transform: uppercase;
    }
    #title hr {
      width: 70px;
      height: 7px;
      background: var(--green-logo);
    }

    #carrousel {
      width: 100%;
      display: flex;
      justify-content: center;

      .images {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;

        img {
          width: 100%;
          border-radius: 0.4rem;
        }
      }
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

    #title h2 {
      font-size: 40px;
      text-transform: uppercase;
    }
    #title hr {
      width: 70px;
      height: 7px;
      background: var(--green-logo);
    }

    #carrousel {
      width: 100%;
      display: flex;
      justify-content: center;

      .images {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;

        img {
          width: 100%;
          border-radius: 0.4rem;
        }
      }
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
    padding-bottom: 1rem;
    #title h2 {
      font-size: 1.5rem;
      text-transform: uppercase;
    }
    #title hr {
      width: 70px;
      height: 7px;
      background: var(--green-logo);
    }

    #carrousel {
      width: 100%;
      display: flex;
      justify-content: center;

      .images {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;

        img {
          width: 100%;
          border-radius: 0.4rem;
        }
      }
    }
  }
`;

export const Attendance = () => {
  const settings = {
    autoplay: true,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      769: {
        slidesPerView: 5,
        spaceBetween: 30
        
      }
    },
    navigation: true,
    pagination: {
      clickable: true,
    },

  };
  
  return (
    <>
      <ConfirmedContainer id="presencaConfirmada">
        <div id="title">
          <h2>Presenças Confirmadas</h2>
          <hr />
        </div>
        <div id="carrousel">
          <Slider settings={settings}>
            <SwiperSlide>
              <div className="images">
                <img src={User1} alt="" />
                <img src={User2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={User3} alt="" />
                <img src={User4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={User1} alt="" />
                <img src={User2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={User3} alt="" />
                <img src={User4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={User1} alt="" />
                <img src={User2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={User3} alt="" />
                <img src={User4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={User1} alt="" />
                <img src={User2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={User3} alt="" />
                <img src={User4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={User1} alt="" />
                <img src={User2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={User3} alt="" />
                <img src={User4} alt="" />
              </div>
            </SwiperSlide>
          </Slider>
        </div>
      </ConfirmedContainer>
    </>
  );
};
