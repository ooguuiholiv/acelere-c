import React from "react";
import { SwiperSlide } from "swiper/react";
import styled from "styled-components";
/* Import de imagens */
import BiancaJunqueira from '../../assets/palestrantes/BiancaJunqueira.jpeg'
import CamilaAlves from '../../assets/palestrantes/CamilaAlves.jpeg'
import DanielMarigliano from '../../assets/palestrantes/DanielMarigliano.jpeg'
import FabioNeto from '../../assets/palestrantes/FabioNeto.jpeg'
import FlaviaFreitas from '../../assets/palestrantes/FlaviaFreitas.jpeg'
import HermanoFreitas from '../../assets/palestrantes/HermanoFreitas.jpeg'
import JohnatanHighlander from '../../assets/palestrantes/JohnatanHighlander.jpeg'
import JoseLeonardo from '../../assets/palestrantes/JoseLeonardo.jpeg'
import JoseNascimento from '../../assets/palestrantes/JoseNascimento.jpeg'
import JulioAlmeida from '../../assets/palestrantes/JulioAlmeida.jpeg'
import JulioDario from '../../assets/palestrantes/JulioDario.jpeg'
import LaieneSouza from '../../assets/palestrantes/LaieneSouza.jpeg'
import LarissaCampos from '../../assets/palestrantes/LarissaCampos.jpeg'
import LeonardoLeao from '../../assets/palestrantes/LeonardoLeao.jpeg'
import MarcoAurelio from '../../assets/palestrantes/MarcoAurelio.jpeg'
import MarcosRossi from '../../assets/palestrantes/MarcosRossi.jpeg'
import PedroEmboava from '../../assets/palestrantes/PedroEmboava.jpeg'
import RafaelRibeiro from '../../assets/palestrantes/RafaelRibeiro.jpeg'
import RickChester from '../../assets/palestrantes/RickChester.jpeg'
import TiagoBispo from '../../assets/palestrantes/TiagoBispo.jpeg'
import WagnerSouza from '../../assets/palestrantes/WagnerSouza.jpeg'




// import User1 from "../../assets/user1.jpg";
// import User2 from "../../assets/user2.jpg";
// import User3 from "../../assets/user3.jpg";
// import User4 from "../../assets/user4.jpg";
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
                <img src={BiancaJunqueira} alt="Bianca Junqueira" />
                <img src={CamilaAlves} alt="Camila Alves" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={DanielMarigliano} alt="Daniel Marigliano" />
                <img src={FabioNeto} alt="Fabio Neto" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={FlaviaFreitas} alt="Flavia Freitas" />
                <img src={HermanoFreitas} alt="Hermano Freitas" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={JohnatanHighlander} alt="Johnatan Highlander" />
                <img src={JoseLeonardo} alt="Jose Leonardo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={JoseNascimento} alt="Jose Nascimento" />
                <img src={JulioAlmeida} alt="Julio Almeida" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={JulioDario} alt="Julio Dario" />
                <img src={LaieneSouza} alt="Laiene Sousa" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={LarissaCampos} alt="Larissa Campos" />
                <img src={LeonardoLeao} alt="Leonardo Leao" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={MarcoAurelio} alt="Marco Aurelio" />
                <img src={PedroEmboava} alt="Pedro Emboava" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={RafaelRibeiro} alt="Rafael Ribeiro" />
                <img src={TiagoBispo} alt="Tiago Bispo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                <img src={WagnerSouza} alt="Wagner Souza" />
                {/* <img src={RickChester} alt="Rick Chester" /> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="images">
                {/* <img src={MarcosRossi} alt="Marcos Rossi" /> */}
              </div>
            </SwiperSlide>
          </Slider>
        </div>
      </ConfirmedContainer>
    </>
  );
};
