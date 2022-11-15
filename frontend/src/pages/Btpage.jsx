import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/Btpage.css";
// import axios from "axios";
// import TimeOut from "./TimeOut";

import AnswerContainer from "@components/btpage/AnswerContainer";
import TitleBt from "@components/btpage/TitleBt";
import Pochette from "@components/btpage/Pochette";
import ButtonScore from "@components/btpage/ButtonScore";
import Menu from "../components/Menu";
import CounterTime from "../components/btpage/CounterTime";

function Btpage({ listChoice }) {
  // listChoice n'est pas vide
  const pochette =
    "https://images.pexels.com/photos/3831187/pexels-photo-3831187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [counterStart, setCounterStart] = useState(false);

  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");

  // ce fait une fois au début => quand listChoice change
  useEffect(() => {
    // console.log("listChoice");
    // console.log(listChoice);
    // let i;
    let i2;
    let i3;
    let i4;
    const max = listChoice.length;

    const i = Math.floor(Math.random() * max);
    i2 = Math.floor(Math.random() * max);
    while (i2 === i) {
      i2 = Math.floor(Math.random() * max);
    }
    i3 = Math.floor(Math.random() * max);
    while (i3 === i || i3 === i2) {
      i3 = Math.floor(Math.random() * max);
    }
    i4 = Math.floor(Math.random() * max);
    while (i4 === i || i4 === i2 || i4 === i3) {
      i4 = Math.floor(Math.random() * max);
    }

    // la bonne réponse => le titre
    setAnswer(listChoice[i].titre);
    // envoi tout les objets
    setAnswers([listChoice[i], listChoice[i2], listChoice[i3], listChoice[i4]]);
  }, [listChoice]);

  return (
    <div className="btpage">
      <Menu />
      <TitleBt />
      <div className="btpagemain">
        <div className="quizz">
          <span className="scoreMobile">
            <ButtonScore score={score} />
          </span>
          <Pochette pochette={pochette} />

          {/* --- */}

          <AnswerContainer
            array={answers}
            setScore={setScore}
            answer={answer}
            counterStart={counterStart}
          />
        </div>
        <CounterTime setCounterStart={setCounterStart} />

        {/* --- */}
        <span className="scoreDesktop">
          <ButtonScore score={score} />
        </span>
      </div>
    </div>
  );
}

Btpage.propTypes = {
  listChoice: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
    ])
  ).isRequired,
};

export default Btpage;

// ??? le tableau answers à un useEffect de retard
