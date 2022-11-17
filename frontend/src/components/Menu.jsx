import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { BiUserCircle } from "react-icons/bi";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

function Menu({ setGenreChoice, setAnneeChoice }) {
  const [isActive, setActive] = useState(false);
  const toggle = () => {
    setActive(!isActive);
  };

  const resetTab = () => {
    setGenreChoice([]);
    setAnneeChoice([]);
  };

  return (
    <div id="principale-menu" className={isActive ? "click" : null}>
      <button
        id="button-menu"
        type="button"
        className={isActive ? "click" : null}
        onClick={toggle}
      >
        <FontAwesomeIcon icon={faBars} className="bars" />
        <FontAwesomeIcon icon={faXmark} className="xmark" />
      </button>

      <Link to="/connexion">
        <BiUserCircle id="button-user" />
      </Link>

      <nav className={isActive ? "click" : null}>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/recherche">Rechercher</Link>
          </li>
          <li>
            <Link to="/choice" onClick={() => resetTab()}>
              Choix Blind Test
            </Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>

        <div className="bottom">
          <div className="icons-applis">
            <a
              href="https://fr-fr.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://twitter.com/?lang=fr"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.instagram.com/?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
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

Menu.propTypes = {
  setGenreChoice: PropTypes.func.isRequired,
  setAnneeChoice: PropTypes.func.isRequired,
};

export default Menu;
