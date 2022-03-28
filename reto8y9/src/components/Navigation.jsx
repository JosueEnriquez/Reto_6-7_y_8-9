import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.png'
import '../scss/Navigation.scss'

export default function Navigation() {
  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="navbar__logo-container">
          <Link className="navbar__logo-link" to="/">
            <img
              className="navbar__logo"
              src={Logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar__list-links-container">
          <ul className="navbar__list-link">
            <li className="navbar__list-item">
              <Link className="navbar__list-item-link" to="/">
                HOME
              </Link>
            </li>
            <li className="navbar__list-item">
              <a className="navbar__list-item-link" href="#cursos">
                CURSOS
              </a>
            </li>
            <li className="navbar__list-item">
              <a className="navbar__list-item-link" href="#footer">
                NOSOTROS
              </a>
            </li>
            <li className="navbar__list-item">
              <a className="navbar__list-item-link" href="#form">
                CONTACTANOS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
