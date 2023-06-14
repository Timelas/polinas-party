import React from "react";
import date from "../../images/date.svg";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date" id="place">
      <div className="info-date__when">
        <img className="info-date__date" alt="22.07.23" src={date}></img>
        <div className="info-date__where">
          <p className="info-date__title">LOFT HALL</p>
          <p className="info-date__title">Арсенальная набережная 1</p>
        </div>
      </div>
      <div className="info-date__what">
        <p className="info-date__time">Сбор гостей<br/>в 17:00</p>
        <div className="info-date__line"></div>
        <p className="info-date__time">Окончание <br/>в 00:00</p>
      </div>
    </section>
  );
}

export default InfoDate;