import React from "react";
import Title from "@components/Title";
import Toggle from "@components/Toggle";
import ButtonContainer from "@components/ButtonContainer";

const years = [
  {
    name: "60's & 70's",
  },
  {
    name: "80's",
  },
  {
    name: "90's",
  },
  {
    name: "2000's",
  },
  {
    name: "2010's",
  },
];

const kind = [
  {
    name: "Rock",
  },
  {
    name: "Pop",
  },
  {
    name: "Film",
  },
  {
    name: "Rap",
  },
  {
    name: "Electro",
  },
];

const ourChoice = [
  {
    name: "Daddy C.",
  },
  {
    name: "Jeremy Larousse",
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
    <div className="section">
      <Title />
      <Toggle />
      <ButtonContainer array={years} />
      <ButtonContainer array={kind} />
      <ButtonContainer array={ourChoice} />
    </div>
  );
}

export default BlindTestChoice;
