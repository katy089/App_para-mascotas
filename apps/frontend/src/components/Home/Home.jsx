import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import ImgDog from "../../assets/img/Dog1.png";
import ImgCat from "../../assets/img/Cat1.png";
import Functioning from "../Functioning/Functioning";
import TopCaregivers from "../TopCaregivers/TopCaregivers";
import RatesHome from "../RatesHome/RatesHome";
import Review from "../Review/Review";
import DogFooter from "../DogFooter/DogFooter";
import Manito_violeta_Review from "../../assets/img/manito_violeta.png";
import VectorBanner1_Review from "../../assets/icons/VectorBanner1.svg";
import VectorBanner2_Review from "../../assets/icons/VectorBanner2.svg";


export default function Home() {
  return (
    <main id="home">
      <Banner />
      <About
        iconAnimal={ImgDog}
        text="Somos el intermediario que se encarga de reunirte con el mejor cuidador para tu mascota."
        title="Nuestros Servicios"
        order={1}
        textButton="Más de nosotros"
      />
      <About
        iconAnimal={ImgCat}
        text="Todos nuestros cuidadores tienen un certificado."
        title="Certificado de cuidador"
        order={2}
        textButton="Más sobre esto"
      />
      <TopCaregivers />
      <RatesHome/>
      <Functioning />
      <Review />
      <DogFooter/>
      
      
    </main>
  );
}
