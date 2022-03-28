import React from "react";
import "../scss/Footer.scss"

export default function Footer() {
  return (
    <footer class="footer">
      <section class="footer__info-footer">
        <div class="footer__info-aprendizage-container">
          <h3 class="footer__info-aprendizage-tile">APRENDIZAJE</h3>
          <ul class="footer__info-aprendizage-list">
            <li class="footer__info-aprendizage-item">
              <a href="/">DESARROLLO WEB</a>
            </li>
            <li class="footer__info-aprendizage-item">
              <a href="/">PROGRAMACIÓN</a>
            </li>
            <li class="footer__info-aprendizage-item">
              <a href="/">EXPERIENCIA DIGITAL</a>
            </li>
          </ul>
        </div>
        <div class="footer__info-popular-container">
          <h3 class="footer__info-popular-title">BOOTCAMPS POPULARES</h3>
          <ul class="footer__info-popular-list">
            <li class="footer__info-popular-item">
              <a href="/">DESARROLLO WEB FULL STACK DEVELOPERS</a>
            </li>
            <li class="footer__info-popular-item">
              <a href="/">DISEÑO DE INTERFACES UX/UI</a>
            </li>
            <li class="footer__info-popular-item">
              <a href="/">DISEÑO DE VIDEOJUEGOS</a>
            </li>
          </ul>
        </div>
        <div class="footer__info-contact-container">
          <h3 class="footer__info-contact-title">SÍGUENOS EN:</h3>
          <ul class="footer__info-contact-list">
            <li class="footer__info-contact-item">
              <a href="/">WHATSAPP</a>
            </li>
            <li class="footer__info-contact-item">
              <a href="/">LLÁMANOS</a>
            </li>
            <li class="footer__info-contact-item">
              <a href="/">ESCRIBENOS</a>
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
          <a class="footer__legal-link" href="/">
            EMPRESA
          </a>
          <a class="footer__legal-link" href="/">
            BOOTCAMPS
          </a>
          <a class="footer__legal-link" href="/">
            POLITICAS DE PRIVACIDAD
          </a>
          <a class="footer__legal-link" href="/">
            POLITICAS DE COOKIES
          </a>
        </div>
      </section>
    </footer>
  );
}
