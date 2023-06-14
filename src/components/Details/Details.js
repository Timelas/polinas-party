import React from "react";
import details from "../../images/details.svg";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">По всем вопросам обращайтесь к организаторам<br/>Даниил +7 911 285-26-98<br/>и Лилия +7 999-232-36-27</p>
    </section>
  );
}

export default Details;