import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Title from "@components/btchoice/Title";
import Toggle from "@components/btchoice/Toggle";
import ButtonContainer from "@components/btchoice/ButtonContainer";
import "../style/BlindTestChoice.css";
import Menu from "../components/Menu";

const years = [
  {
    name: "1960 & 1970",
    id: 1,
  },
  {
    name: 1980,
    id: 2,
  },
  {
    name: 1990,
    id: 3,
  },
  {
    name: 2000,
    id: 4,
  },
  {
    name: 2010,
    id: 5,
  },
];

const kind = [
  {
    name: "rock",
    id: 6,
  },
  {
    name: "pop",
    id: 7,
  },
  {
    name: "film",
    id: 8,
  },
  {
    name: "rap",
    id: 9,
  },
  {
    name: "electro",
    id: 10,
  },
];

// const ourChoice = [
//   {
//     name: "Daddy C.",
//   },
//   {
//     name: "Jeremy",
//   },
//   {
//     name: "Valentin",
//   },
//   {
//     name: "Matthieu",
//   },
//   {
//     name: "Dani",
//   },
// ];

function BlindTestChoice({
  setGenreChoice,
  genreChoice,
  setAnneeChoice,
  anneeChoice,
}) {
  return (
    <div className="test-selection">
      <Menu />
      <Title />
      <div className="section">
        <div className="music-filter">
          <ButtonContainer
            array={years}
            choice={anneeChoice}
            setChoice={setAnneeChoice}
          />
          <ButtonContainer
            array={kind}
            choice={genreChoice}
            setChoice={setGenreChoice}
          />
        </div>

        <div className="our-tests">
          {/* <ButtonContainer array={ourChoice} /> */}
        </div>
      </div>

      <div className="buttons-downside">
        <Toggle />

        <button type="button" className="send">
          <Link to="/test">GO !</Link>
        </button>
      </div>
    </div>
  );
}

BlindTestChoice.propTypes = {
  setGenreChoice: PropTypes.func.isRequired,
  setAnneeChoice: PropTypes.func.isRequired,

  genreChoice: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
    ])
  ).isRequired,
  anneeChoice: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ])
  ).isRequired,
};

export default BlindTestChoice;
