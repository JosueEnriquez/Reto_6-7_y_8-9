import React from "react";
import "../scss/Form.scss"

export default function Form() {
  return (
    <section className="form">
      <div className="form__image-container">
        <img
          className="form__image"
          src="https://www.avanzaentucarrera.com/orientacion/comp/uploads/2020/06/AETC-perspectivas-laborales-del-desarrollador-de-phyton-848x449.jpg"
          alt="form"
        />
      </div>
      <div className="form__form-container">
        <form className="form__form" action="">
          <h2 className="form__form-title">INSCRIPCIONES ABIERTAS</h2>
          <input
            className="form__form-imput"
            type="text"
            placeholder="NOMBRES COMPLETOS"
          />
          <div className="form__form-input-group">
            <input
              className="form__form-imput"
              type="text"
              placeholder="APELLIDO PATERNO"
            />
            <input
              className="form__form-imput"
              type="text"
              placeholder="APELLIDO MATERNO"
            />
          </div>
          <div className="form__form-input-group">
            <input
              className="form__form-imput"
              type="number"
              placeholder="CELULAR"
            />
            <input className="form__form-imput" type="number" placeholder="DNI" />
          </div>
          <input className="form__form-imput" type="email" placeholder="EMAIL" />
          <input
            className="form__form-imput"
            type="text"
            placeholder="EMPRESA DONDE LABORA"
          />
          <input className="form__form-imput" type="text" placeholder="BOOTCAMP" />
          <div className="form__form-input-group">
            <input
              id="terminosLegal"
              className="form__form-imput--check"
              type="checkbox"
            />
            <label htmlFor="terminosLegal" className="form__form-input--check-text">
              HE LEÍDO Y ACEPTO LAS POLÍTICAS DE PRIVACIDAD
            </label>
          </div>
          <button className="form__form-button">REGISTRAR</button>
        </form>
      </div>
    </section>
  );
}
