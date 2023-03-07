import React from "react";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";
import Slider from "../../services/Slider";

import Honorato from "../../assets/parceiros/honorato.png";
import Loghaly from "../../assets/parceiros/loghaly.png";
import OneHotel from "../../assets/parceiros/onehotel.png";
import Shopdin from "../../assets/parceiros/shopdin.png";
import Skill from "../../assets/parceiros/skill.png";

const PartnersContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  #title {
    h1 {
      text-align: center;
      font-size: 2.4rem;
      font-family: "Roboto", sans-serif;
      color: white;
    }
    hr {
      width: 70px;
      height: 7px;
      border: none;
      background: var(--green-logo);
    }
  }

  #carrousel {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 80%;
      border-radius: 0.4rem;
    }
  }
`;

export const Partners = () => {
  const settings = {
    autoplay: true,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      769: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
    navigation: true,
    pagination: {
      clickable: true,
    },
  };
  return (
    <>
      <PartnersContainer>
        <div id="title">
          <h1>Apoio</h1>
          <hr />
        </div>
        <div id="carrousel">
          <Slider settings={settings}>
            <SwiperSlide>
              <img src={Honorato} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Loghaly} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={OneHotel} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Shopdin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Skill} alt="" />
            </SwiperSlide>
          </Slider>
        </div>
      </PartnersContainer>
    </>
  );
};
