import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../scss/Hero.scss'

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section className="hero">
      <div className="hero__contact-container">
        <ul className="hero__contact-list">
          <li className="hero__contact-item">
            <Link className="hero__contact-link" to="/">
              FACEBOOK
            </Link>
          </li>
          <li className="hero__contact-item">
            <Link className="hero__contact-link" to="/">
              INSTAGRAM
            </Link>
          </li>
          <li className="hero__contact-item">
            <Link className="hero__contact-link" to="/">
              YOUTUBE
            </Link>
          </li>
          <li className="hero__contact-item">
            <Link className="hero__contact-link" to="/">
              GMAIL
            </Link>
          </li>
        </ul>
      </div>
      <div className="hero__display-container">
        <h1 className="hero__display-title">DOMINA EL LENGUAJE DIGITAL</h1>
        <p className="hero__display-description">
          CONTAMOS CON{" "}
          <span className="hero__display-description-part">BOOTCAMPS</span> QUE
          PERMITEN A LOS ESTUDIANTES APLICAR DE{" "}
          <span className="hero__display-description-part">
            FORMA INMEDIATA
          </span>{" "}
          SUS CONOCIMIENTOS EN EL MUNDO{" "}
          <span className="hero__display-description-part">LABORAL</span>.
        </p>
        <div className="hero__display-more-container">
          <Link className="hero__display-more-botton" to="/">
            <i className="fa-solid fa-play"></i>
          </Link>
          <h4 className="hero__display-more-message">APRENDE MÁS</h4>
        </div>
        <div className="hero__display-invite-container">
          <div className="hero__display-invite-message-container">
            <p>HAS SCROLL PARA VER MÁS</p>
          </div>
          <div className="hero__display-invite-image"></div>
        </div>
      </div>
      <div className="hero__slider-container">
        <div className="hero__slider-slides-container">
          <img className="hero__slider-image" src="https://miro.medium.com/max/1400/0*EOfRfHeaCFASkcy6.jpg" alt="slide"
          />
          <div className="hero__slider-slides-description-container">
            <h4 className="hero__slider-slides-description-index">01</h4>
            <h2 className="hero__slider-slides-description-title">
              DESARROLLO WEB FULL STACK
            </h2>
            <h3 className="hero__slider-slides-description-subtile">
              INICIO: 28 MARZO
            </h3>
          </div>
        </div>
        <div className="hero__slider-controls-container">
          <div className="hero__slider-controls-reference-container">
            <div className="hero__slider-controls-reference active"></div>
            <div className="hero__slider-controls-reference"></div>
            <div className="hero__slider-controls-reference"></div>
          </div>
          <div className="hero__slider-controls-buttons-container">
            <button onClick={navigate('/')} className="hero__slider-controls-button">&lt;</button>
            <button onClick={navigate('/')} className="hero__slider-controls-button">&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
}
