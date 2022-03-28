import React from "react";
import "../scss/Footer.scss"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="footer">
      <section class="footer__info-footer">
        <div class="footer__info-aprendizage-container">
          <h3 class="footer__info-aprendizage-tile">APRENDIZAJE</h3>
          <ul class="footer__info-aprendizage-list">
            <li class="footer__info-aprendizage-item">
              <Link to="/">DESARROLLO WEB</Link>
            </li>
            <li class="footer__info-aprendizage-item">
              <Link to="/">PROGRAMACIÓN</Link>
            </li>
            <li class="footer__info-aprendizage-item">
              <Link to="/">EXPERIENCIA DIGITAL</Link>
            </li>
          </ul>
        </div>
        <div class="footer__info-popular-container">
          <h3 class="footer__info-popular-title">BOOTCAMPS POPULARES</h3>
          <ul class="footer__info-popular-list">
            <li class="footer__info-popular-item">
              <Link to="/">DESARROLLO WEB FULL STACK DEVELOPERS</Link>
            </li>
            <li class="footer__info-popular-item">
              <Link to="/">DISEÑO DE INTERFACES UX/UI</Link>
            </li>
            <li class="footer__info-popular-item">
              <Link to="/">DISEÑO DE VIDEOJUEGOS</Link>
            </li>
          </ul>
        </div>
        <div class="footer__info-contact-container">
          <h3 class="footer__info-contact-title">SÍGUENOS EN:</h3>
          <ul class="footer__info-contact-list">
            <li class="footer__info-contact-item">
              <Link to="/">WHATSAPP</Link>
            </li>
            <li class="footer__info-contact-item">
              <Link to="/">LLÁMANOS</Link>
            </li>
            <li class="footer__info-contact-item">
              <Link to="/">ESCRIBENOS</Link>
            </li>
          </ul>
        </div>
      </section>
      <section class="footer__legal-footer">
        <div class="footer__legal-copy-container">
          <span class="footer__legal-copy">
            © 2021 TECSUP - TODOS LOS DERECHOS RESERVADOS.
          </span>
        </div>
        <div class="footer__legal-links">
          <Link class="footer__legal-link" to="/">
            EMPRESA
          </Link>
          <Link class="footer__legal-link" to="/">
            BOOTCAMPS
          </Link>
          <Link class="footer__legal-link" to="/">
            POLITICAS DE PRIVACIDAD
          </Link>
          <Link class="footer__legal-link" to="/">
            POLITICAS DE COOKIES
          </Link>
        </div>
      </section>
    </footer>
  );
}
