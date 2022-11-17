import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/Btpage.css";
// import axios from "axios";
// import TimeOut from "./TimeOut";

import AnswerContainer from "@components/btpage/AnswerContainer";
import TitleBt from "@components/btpage/TitleBt";
import Pochette from "@components/btpage/Pochette";
import ButtonScore from "@components/btpage/ButtonScore";
import Player from "react-h5-audio-player";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CounterTime from "../components/btpage/CounterTime";
import "react-h5-audio-player/lib/styles.css";

// filtrer par genre pour avoir des réponses convenables

function Btpage({ listChoice }) {
  // listChoice > 4
  const pochette =
    "https://images.pexels.com/photos/3831187/pexels-photo-3831187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [counterStart, setCounterStart] = useState(false); // true/false counterTimer est activé

  const [answers, setAnswers] = useState([]); // les 4 choix
  const [score, setScore] = useState(0); // le score +1 quand bon
  const [answer, setAnswer] = useState(""); // la bonne réponse
  const [audio, setAudio] = useState(""); // l'audio de la bonne réponse
  const [pochetteAnswer, setPochetteAnswer] = useState("");

  const [change, setChange] = useState(false);
  useEffect(() => {
    // console.log(`chang${change}`);
    // console.log("listChoice");
    // console.log(listChoice);
    const max = listChoice.length;

    const i1 = Math.floor(Math.random() * max);
    let i2 = Math.floor(Math.random() * max);
    while (i2 === i1) {
      i2 = Math.floor(Math.random() * max);
    }
    let i3 = Math.floor(Math.random() * max);
    while (i3 === i1 || i3 === i2) {
      i3 = Math.floor(Math.random() * max);
    }
    let i4 = Math.floor(Math.random() * max);
    while (i4 === i1 || i4 === i2 || i4 === i3) {
      i4 = Math.floor(Math.random() * max);
    }

    // la bonne réponse => le titre
    // mettre Answers en random =>
    const random = Math.floor(Math.random() * 4) + 1;
    if (random === 1) {
      setAnswer(listChoice[i1].titre);
      setAudio(listChoice[i1].mp3);
      setPochetteAnswer(listChoice[i1].pochette);
    } else if (random === 2) {
      setAnswer(listChoice[i2].titre);
      setAudio(listChoice[i2].mp3);
      setPochetteAnswer(listChoice[i2].pochette);
    } else if (random === 3) {
      setAnswer(listChoice[i3].titre);
      setAudio(listChoice[i3].mp3);
      setPochetteAnswer(listChoice[i3].pochette);
    } else {
      setAnswer(listChoice[i4].titre);
      setAudio(listChoice[i4].mp3);
      setPochetteAnswer(listChoice[i4].pochette);
    }

    setAnswers([
      listChoice[i1],
      listChoice[i2],
      listChoice[i3],
      listChoice[i4],
    ]);
  }, [listChoice, change]);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Final</div>;
    }

    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  return (
    <div className="btpage">
      <TitleBt />
      <div className="btpagemain">
        <div className="quizz">
          <span className="scoreMobile">
            <ButtonScore score={score} />
            <CounterTime
              change={change}
              setCounterStart={setCounterStart}
              counterStart={counterStart}
            />
          </span>

          <Pochette pochette={pochette} />

          {/* --- */}

          <AnswerContainer
            array={answers}
            setScore={setScore}
            answer={answer}
            counterStart={counterStart}
            setChange={setChange}
            change={change}
          />

          <Player
            className="MusicPlayerBox"
            src={`http://localhost:5000/mp3/${audio}`}
            showJumpControls={false}
            autoPlay={false}
            autoPlayAfterSrcChange={false}
          />
        </div>

        <div className="answer-resp">
          <img src={pochetteAnswer} alt="pochette" />
        </div>
        {/* --- */}
        <span className="scoreDesktop">
          <ButtonScore score={score} setScore={setScore} />

          <div className="timer-wrapper">
            <CountdownCircleTimer
              isPlaying
              duration={20}
              colors={["#377D22", "#FFEF00", "#ec7e40", "#A30000"]}
              colorsTime={[15, 10, 5, 0]}
              onComplete={() => ({ shouldRepeat: false, delay: 5 })}
              size={250}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
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
