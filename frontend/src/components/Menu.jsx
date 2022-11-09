import React, { useState } from "react";
import "./Menu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "boxicons";

function Menu() {
  const [isActive, setActive] = useState(false);
  const toggle = () => {
    setActive(!isActive);
  };

  return (
    <div id="principale-menu" className={isActive ? "click" : null}>
      <button
        type="button"
        className={isActive ? "click" : null}
        onClick={toggle}
      >
        <FontAwesomeIcon icon={faBars} className="bars" />
        <FontAwesomeIcon icon={faXmark} className="xmark" />
      </button>

      <nav className={isActive ? "click" : null}>
        <ul>
          <li>
            <a href="./accueil.html">Accueil</a>
          </li>
          <li>
            <a href="./blindtest.html">Choix Blind Test</a>
          </li>
          <li>
            <a href="./rechercher.html">Rechercher</a>
          </li>
          <li>
            <a href="./user.html">User</a>
          </li>
        </ul>

        <div className="bottom">
          <div className="icons-applis">
            <a
              href="https://fr-fr.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <box-icon type="logo" name="facebook-square" />
            </a>
            <a
              href="https://twitter.com/?lang=fr"
              target="_blank"
              rel="noreferrer"
            >
              <box-icon type="logo" name="twitter" />
            </a>
            <a
              href="https://www.instagram.com/?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              <box-icon name="instagram-alt" type="logo" />
            </a>
          </div>

          <p className="copyright">
            © Baptiste Courtin / Daniel Gómez Rodríguez / Valentin Gueret /
            Jérémie Larousse / Mathieu Manssens -- 2022
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
