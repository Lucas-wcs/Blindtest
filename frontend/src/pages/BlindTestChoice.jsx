import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Title from "../components/btchoice/Title";

import ButtonContainer from "../components/btchoice/ButtonContainer";
import "../style/BlindTestChoice.css";
import ButtonContainerOT from "../components/btchoice/ButtonContainerOT";

const years = [
  {
    name: "1960 & 1970",
    id: "button1",
  },
  {
    name: 1980,
    id: "button2",
  },
  {
    name: 1990,
    id: "button3",
  },
  {
    name: 2000,
    id: "button4",
  },
  {
    name: 2010,
    id: "button5",
  },
];

const kind = [
  {
    name: "rock",
    id: "button6",
  },
  {
    name: "pop",
    id: "button7",
  },
  {
    name: "film",
    id: "button8",
  },
  {
    name: "rap",
    id: "button9",
  },
  {
    name: "electro",
    id: "button10",
  },
];

 const ourChoice = [
   {
     name: "Daddy C.",
     songArray : [2,
      7,
      10,
      11,
      24,
      36,
      38,
      44,
      55,
      58]
   },
   {
     name: "Jeremy",
     songArray : [16,  17, 23, 29,  30, 32, 42, 55, 57, 61]
   },
   {
     name: "Valentin",
     songArray : [3, 12, 17, 29, 39, 44, 46, 50, 60, 69]
   },
   {
     name: "Matthieu",
   },
   {
     name: "Dani",
     songArray : [4, 6, 15, 39, 40, 43, 57, 58, 61, 64]
   },
 ];


function BlindTestChoice({
  setGenreChoice,
  genreChoice,
  setAnneeChoice,
  anneeChoice,
  listChoice,
  setOurTest,

})
{

  

  return (
    <div className="test-selection">
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
          <ButtonContainerOT array={ourChoice} setOurTest={setOurTest}/>
        </div>
      </div>

      <div className="buttons-downside">
           {listChoice.length >= 4 ? (
          <button type="button" className="send">
            <Link to="/test">GO !</Link>
          </button>
        ) : null}
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
  listChoice: PropTypes.string.isRequired,
};

export default BlindTestChoice;
