import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/Info.scss"

export default function Info() {
  const navigate = useNavigate()
  return (
    <section className="info">
      <div className="info__image-container">
        <img
          className="info__image"
          src="https://cdn-bjcjl.nitrocdn.com/HQYXfZvlijlYvwqzOZEqIWtqVqwJebrr/assets/static/optimized/rev-4834817/wp-content/uploads/2016/08/photo-1498050108023-c5249f4df085-compressor.jpg"
          alt="bootcamp"
        />
      </div>
      <div className="info__description-container">
        <h2 className="info__description-title">DESARROLLO WEB FULL STACK</h2>
        <p className="info__description-description">
          APRENDE A DESARROLLAR APLICACIONES WEB DESDE CERO A UN NIVEL AVANZADO
          CONOCIENDO LAS DOS PARTES IMPORTANTES DEL DESARROLLO COMO LO SON EL
          FRONT-END Y EL BACK-END.
        </p>
        <p className="info__description-sub-description">MODALIDAD 100% VIRTUAL</p>
        <button onClick={navigate('/')} className="info__description-more">SHOW MORE</button>
      </div>
    </section>
  );
}
