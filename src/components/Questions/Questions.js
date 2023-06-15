import React, {useState, useRef} from "react";
import question from "../../images/questions.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycby_BYT6LzPV3FZHn66CPeQcYu6bE5b3ZBjuvAoU08L_RdiIzQ7viRTg5mtfej77Y_iK/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <div className="question__bloks">
        { isFormVisible ?
          <div className="question__container">
            <img src={question} alt="опрос" className="question__header"></ img>
            <p className="question__text">Пожалуйста, подтвердите ваше присутствие на празднике до 2 июля 2023 года любым удобным для вас способом или заполните форму ниже.<br/>Чтобы все прошло идеально и этот вечер запомнился надолго, пожалуйста, ответьте на несколько вопросов:</p>
            <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
            <p className="question__string question__string-names">
              <label htmlFor="who" className="question__label-input question__label-input-names">Имя и фамилия:</label>
              <input type="text" name="Имя и Фамилия" id="who" required className="question__input question__input-names" minLength={2}></input>
            </p>
            <p className="question__string">
              <label htmlFor="alco" className="question__label-input">Предпочтение по еде:</label>
              <input type="text" name="Алкоголь" id="alco" required className="question__input"></input>
            </p>
            <p className="question__string">
              <label htmlFor="alco" className="question__label-input">Предпочтение по напиткам:</label>
              <input type="text" name="Алкоголь" id="alco" required className="question__input"></input>
            </p>
            <p className="question__string">
              <label htmlFor="alco" className="question__label-input">Иное/есть аллергия:</label>
              <input type="text" name="Алкоголь" id="alco" required className="question__input"></input>
            </p>
            <div className="question__buttons">
              <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Подтвердить"}</button>
              <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Отклонить"}</button>
            </div>
          </form> 
        </div>
        :
        <div>
          <img src={question} alt="опрос" className="question__header"></ img>
          <p className="question__text">Форма отправлена!</p>
        </div>
        }
      </div>
    </section>
  );
}

export default Questions;