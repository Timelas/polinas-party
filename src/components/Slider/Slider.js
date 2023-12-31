import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slider1 from "../../images/slider1.jpeg";
import slider2 from "../../images/slider2.jpeg";
import slider3 from "../../images/slider3.jpeg";
import slider4 from "../../images/slider4.jpeg";
import slider5 from "../../images/slider5.jpeg";
import slider6 from "../../images/slider6.jpeg";
import slider7 from "../../images/slider7.jpeg";
import slider8 from "../../images/slider8.jpeg";
import slider9 from "../../images/slider9.jpeg";
import slider10 from "../../images/slider10.jpeg";
import slider11 from "../../images/slider11.jpeg";
import slider12 from "../../images/slider12.jpeg";
import slider13 from "../../images/slider13.jpeg";
import slider14 from "../../images/slider14.jpeg";
import slider15 from "../../images/slider15.jpeg";
import slider16 from "../../images/slider16.jpeg";
import slider17 from "../../images/slider17.jpeg";
import slider18 from "../../images/slider18.jpeg";
import slider19 from "../../images/slider19.jpeg";
import slider20 from "../../images/slider20.jpeg";
import slider21 from "../../images/slider21.jpeg";
import slider22 from "../../images/slider22.jpeg";
import slider23 from "../../images/slider23.jpeg";
import slider24 from "../../images/slider24.jpeg";
import slider25 from "../../images/slider25.jpeg";
import slider26 from "../../images/slider26.jpeg";
import slider27 from "../../images/slider27.jpeg";
import slider28 from "../../images/slider28.jpeg";
import slider29 from "../../images/slider29.jpeg";
import slider30 from "../../images/slider30.jpeg";
import slider31 from "../../images/slider31.jpeg";
import slider32 from "../../images/slider32.jpeg";
import slider33 from "../../images/slider33.jpeg";
import slider34 from "../../images/slider34.jpeg";
import slider35 from "../../images/slider35.jpeg";
import slider36 from "../../images/slider36.jpeg";
import slider37 from "../../images/slider37.jpeg";
import slider38 from "../../images/slider38.jpeg";
import slider39 from "../../images/slider39.jpeg";
import slider40 from "../../images/slider40.jpeg";
import slider41 from "../../images/slider41.jpeg";
import arrow from "../../images/arrow.svg";
import "../DressCode/Dresscode.css";
import "./Slider.css";


const Gallery = () => {
  return (
    <AliceCarousel 
        mouseTracking
        disableDotsControls 
        responsive={{
            0: { items: 3 },
            500: { items: 4 },
            1024: { items: 5 }
        }}
        infinite={true}
        renderPrevButton={() => {
          return <img className="slider__btn slider__btn-pre"
          alt="стрелка назад"
          src={arrow}></img>
        }}
        renderNextButton={() => {
          return <img className="slider__btn slider__btn-next"
          alt="стрелка вперед"
          src={arrow}></img>
        }}
    >
        <img key={slider1} src={slider1} alt="dresscode" className="dresscode__image"></img>
        <img key={slider2} src={slider2} alt="dresscode" className="dresscode__image"></img>
        <img key={slider3} src={slider3} alt="dresscode" className="dresscode__image"></img>
        <img key={slider4} src={slider4} alt="dresscode" className="dresscode__image"/>
        <img key={slider5} src={slider5} alt="dresscode" className="dresscode__image"/>
        <img key={slider6} src={slider6} alt="dresscode" className="dresscode__image"/>
        <img key={slider7} src={slider7} alt="dresscode" className="dresscode__image"/>
        <img key={slider8} src={slider8} alt="dresscode" className="dresscode__image"/>
        <img key={slider9} src={slider9} alt="dresscode" className="dresscode__image"/>
        <img key={slider10} src={slider10} alt="dresscode" className="dresscode__image"/>
        <img key={slider11} src={slider11} alt="dresscode" className="dresscode__image"/>
        <img key={slider12} src={slider12} alt="dresscode" className="dresscode__image"/>
        <img key={slider13} src={slider13} alt="dresscode" className="dresscode__image"/>
        <img key={slider14} src={slider14} alt="dresscode" className="dresscode__image"/>
        <img key={slider15} src={slider15} alt="dresscode" className="dresscode__image"/>
        <img key={slider16} src={slider16} alt="dresscode" className="dresscode__image"/>
        <img key={slider17} src={slider17} alt="dresscode" className="dresscode__image"/>
        <img key={slider18} src={slider18} alt="dresscode" className="dresscode__image"/>
        <img key={slider19} src={slider19} alt="dresscode" className="dresscode__image"/>
        <img key={slider20} src={slider20} alt="dresscode" className="dresscode__image"/>
        <img key={slider21} src={slider21} alt="dresscode" className="dresscode__image"/>
        <img key={slider22} src={slider22} alt="dresscode" className="dresscode__image"/>
        <img key={slider23} src={slider23} alt="dresscode" className="dresscode__image"/>
        <img key={slider24} src={slider24} alt="dresscode" className="dresscode__image"/>
        <img key={slider25} src={slider25} alt="dresscode" className="dresscode__image"/>
        <img key={slider26} src={slider26} alt="dresscode" className="dresscode__image"/>
        <img key={slider27} src={slider27} alt="dresscode" className="dresscode__image"/>
        <img key={slider28} src={slider28} alt="dresscode" className="dresscode__image"/>
        <img key={slider29} src={slider29} alt="dresscode" className="dresscode__image"/>
        <img key={slider30} src={slider30} alt="dresscode" className="dresscode__image"/>
        <img key={slider31} src={slider31} alt="dresscode" className="dresscode__image"/>
        <img key={slider32} src={slider32} alt="dresscode" className="dresscode__image"/>
        <img key={slider33} src={slider33} alt="dresscode" className="dresscode__image"/>
        <img key={slider34} src={slider34} alt="dresscode" className="dresscode__image"/>
        <img key={slider35} src={slider35} alt="dresscode" className="dresscode__image"/>
        <img key={slider36} src={slider36} alt="dresscode" className="dresscode__image"/>
        <img key={slider37} src={slider37} alt="dresscode" className="dresscode__image"/>
        <img key={slider38} src={slider38} alt="dresscode" className="dresscode__image"/>
        <img key={slider39} src={slider39} alt="dresscode" className="dresscode__image"/>
        <img key={slider40} src={slider40} alt="dresscode" className="dresscode__image"/>
        <img key={slider41} src={slider41} alt="dresscode" className="dresscode__image"/>
    </AliceCarousel>
  );
}

export default Gallery;