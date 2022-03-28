import React from "react";
import Logo from '../assets/images/Logo.png'
import '../scss/Navigation.scss'

export default function Navigation() {
  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="navbar__logo-container">
          <a className="navbar__logo-link" href="/">
            <img
              className="navbar__logo"
              src={Logo}
              alt="logo"
            />
          </a>
        </div>
        <div className="navbar__list-links-container">
          <ul className="navbar__list-link">
            <li className="navbar__list-item">
              <a className="navbar__list-item-link active" href="/">
                HOME
              </a>
            </li>
            <li className="navbar__list-item">
              <a className="navbar__list-item-link" href="/">
                CURSOS
              </a>
            </li>
            <li className="navbar__list-item">
              <a className="navbar__list-item-link" href="/">
                NOSOTROS
              </a>
            </li>
            <li className="navbar__list-item">
              <a className="navbar__list-item-link" href="/">
                CONTACTANOS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
