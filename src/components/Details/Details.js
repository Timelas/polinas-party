import React from "react";
import details from "../../images/details.svg";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <p className="details__text">По всем вопросам обращайтесь к организаторам<br/>Даниил <a className="details__tel" href="+7(911)285-26-98">+7 911 285-26-98</a><br/>и Лилия <a className="details__tel" href="+7(999)232-36-27">+7 999 232-36-27</a></p>
    </section>
  );
}

export default Details;