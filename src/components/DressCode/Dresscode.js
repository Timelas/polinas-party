import React from "react";
import dresscode from "../../images/dresscode.svg";
import dress1 from "../../images/dress1.jpeg";
import dress2 from "../../images/dress2.jpeg";
import dress3 from "../../images/dress3.jpeg";
import dress4 from "../../images/dress4.jpeg";
import dress5 from "../../images/dress5.jpeg";
import "./Dresscode.css";
import Gallery from "../Slider/Slider";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <img src={dresscode} alt="заголовок" className="dresscode__header"></ img>
      <p className="dresscode__description">Я буду очень благодарна, если ваши образы будут
подобраны в стилистике мероприятия.</p>
      <div className="dresscode__colors">
        <img alt="фото дресс кода" className="dresscode__image" src={dress1}></img>
        <img alt="фото дресс кода" className="dresscode__image" src={dress3}></img>
        <img alt="фото дресс кода" className="dresscode__image" src={dress2}></img>
        <img alt="фото дресс кода" className="dresscode__image" src={dress4}></img>
        <img alt="фото дресс кода" className="dresscode__image" src={dress5}></img>
      </div>
      {/* <Gallery /> */}
    </section>
  );
}

export default Dresscode;