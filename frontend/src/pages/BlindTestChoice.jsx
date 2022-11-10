import React from "react";
import Title from "@components/btchoice/Title";
import Toggle from "@components/btchoice/Toggle";
import ButtonContainer from "@components/btchoice/ButtonContainer";
import "../style/BlindTestChoice.css";
import Menu from "../components/Menu";

const years = [
  {
    name: "60's & 70's",
    id: "button1",
  },
  {
    name: "80's",
    id: "button2",
  },
  {
    name: "90's",
    id: "button3",
  },
  {
    name: "2000's",
    id: "button4",
  },
  {
    name: "2010's",
    id: "button5",
  },
];

const kind = [
  {
    name: "Rock",
    id: "button6",
  },
  {
    name: "Pop",
    id: "button7",
  },
  {
    name: "Film",
    id: "button8",
  },
  {
    name: "Rap",
    id: "button9",
  },
  {
    name: "Electro",
    id: "button10",
  },
];

const ourChoice = [
  {
    name: "Daddy C.",
  },
  {
    name: "Jeremy",
  },
  {
    name: "Valentin",
  },
  {
    name: "Matthieu",
  },
  {
    name: "Dani",
  },
];

function BlindTestChoice() {
  return (
    <div className="test-selection">
      <Menu />
      <Title />
      <div className="section">
        <div className="music-filter">
          <ButtonContainer array={years} />
          <ButtonContainer array={kind} />
        </div>

        <div className="our-tests">
          <ButtonContainer array={ourChoice} />
        </div>
      </div>

      <div className="buttons-downside">
        <Toggle />
        <button type="button" className="send">
          GO !
        </button>
      </div>
    </div>
  );
}

export default BlindTestChoice;
