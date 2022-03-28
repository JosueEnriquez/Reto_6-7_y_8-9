import React from "react";
import "../scss/Cursos.scss"
import { useNavigate } from "react-router-dom";

export default function Cursos() {

  const navigate = useNavigate();

  return (
    <section className="cursos">
      <h2 className="cursos-title">BOOTCAMPS</h2>
      <div className="cursos-continer">
        <article className="cursos__curso-container">
          <div className="cursos__curso-image-container">
            <img
              className="cursos__curso-image"
              src="https://www.desophict.com/wp-content/uploads/2021/03/desarrollo-web-1536x864.webp"
              alt="Curso"
            />
          </div>
          <h3 className="cursos__curso-title">DESARROLLO MÓVIL CON FLUTTER</h3>
          <h4 className="cursos__curso-date">INICIO: 28 MARZO</h4>
          <button onClick={navigate("/")} className="cursos__curso-button">SHOW MORE</button>
        </article>
        <article className="cursos__curso-container">
          <div className="cursos__curso-image-container">
            <img
              className="cursos__curso-image"
              src="https://www.desophict.com/wp-content/uploads/2021/03/desarrollo-web-1536x864.webp"
              alt="Curso"
            />
          </div>
          <h3 className="cursos__curso-title">DESARROLLO MÓVIL CON FLUTTER</h3>
          <h4 className="cursos__curso-date">INICIO: 28 MARZO</h4>
          <button onClick={navigate("/")} className="cursos__curso-button">SHOW MORE</button>
        </article>
        <article className="cursos__curso-container">
          <div className="cursos__curso-image-container">
            <img
              className="cursos__curso-image"
              src="https://www.desophict.com/wp-content/uploads/2021/03/desarrollo-web-1536x864.webp"
              alt="Curso"
            />
          </div>
          <h3 className="cursos__curso-title">DESARROLLO MÓVIL CON FLUTTER</h3>
          <h4 className="cursos__curso-date">INICIO: 28 MARZO</h4>
          <button onClick={navigate("/")} className="cursos__curso-button">SHOW MORE</button>
        </article>
        <article className="cursos__curso-container">
          <div className="cursos__curso-image-container">
            <img
              className="cursos__curso-image"
              src="https://www.desophict.com/wp-content/uploads/2021/03/desarrollo-web-1536x864.webp"
              alt="Curso"
            />
          </div>
          <h3 className="cursos__curso-title">DESARROLLO MÓVIL CON FLUTTER</h3>
          <h4 className="cursos__curso-date">INICIO: 28 MARZO</h4>
          <button onClick={navigate("/")} className="cursos__curso-button">SHOW MORE</button>
        </article>
        <article className="cursos__curso-container">
          <div className="cursos__curso-image-container">
            <img
              className="cursos__curso-image"
              src="https://www.desophict.com/wp-content/uploads/2021/03/desarrollo-web-1536x864.webp"
              alt="Curso"
            />
          </div>
          <h3 className="cursos__curso-title">DESARROLLO MÓVIL CON FLUTTER</h3>
          <h4 className="cursos__curso-date">INICIO: 28 MARZO</h4>
          <button onClick={navigate("/")} className="cursos__curso-button">SHOW MORE</button>
        </article>
        <article className="cursos__curso-container">
          <div className="cursos__curso-image-container">
            <img
              className="cursos__curso-image"
              src="https://www.desophict.com/wp-content/uploads/2021/03/desarrollo-web-1536x864.webp"
              alt="Curso"
            />
          </div>
          <h3 className="cursos__curso-title">DESARROLLO MÓVIL CON FLUTTER</h3>
          <h4 className="cursos__curso-date">INICIO: 28 MARZO</h4>
          <button onClick={navigate("/")} className="cursos__curso-button">SHOW MORE</button>
        </article>
        <article className="cursos__curso-container">
          <div className="cursos__curso-image-container">
            <img
              className="cursos__curso-image"
              src="https://www.desophict.com/wp-content/uploads/2021/03/desarrollo-web-1536x864.webp"
              alt="Curso"
            />
          </div>
          <h3 className="cursos__curso-title">DESARROLLO MÓVIL CON FLUTTER</h3>
          <h4 className="cursos__curso-date">INICIO: 28 MARZO</h4>
          <button onClick={navigate("/")} className="cursos__curso-button">SHOW MORE</button>
        </article>
        <article className="cursos__curso-container">
          <div className="cursos__curso-image-container">
            <img
              className="cursos__curso-image"
              src="https://www.desophict.com/wp-content/uploads/2021/03/desarrollo-web-1536x864.webp"
              alt="Curso"
            />
          </div>
          <h3 className="cursos__curso-title">DESARROLLO MÓVIL CON FLUTTER</h3>
          <h4 className="cursos__curso-date">INICIO: 28 MARZO</h4>
          <button onClick={navigate("/")} className="cursos__curso-button">SHOW MORE</button>
        </article>
      </div>
    </section>
  );
}
