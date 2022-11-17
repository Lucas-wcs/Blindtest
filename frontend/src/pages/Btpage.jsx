import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/Btpage.css";
import { Link } from "react-router-dom";

import AnswerContainer from "@components/btpage/AnswerContainer";
import TitleBt from "@components/btpage/TitleBt";
import Pochette from "@components/btpage/Pochette";
import ButtonScore from "@components/btpage/ButtonScore";
import Player from "react-h5-audio-player";
import CounterTime from "../components/btpage/CounterTime";

import "react-h5-audio-player/lib/styles.css";

function Btpage({ listChoice, setGenreChoice, setAnneeChoice }) {
  const pochette =
    "https://images.pexels.com/photos/3831187/pexels-photo-3831187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [counterStart, setCounterStart] = useState(false); // true/false counterTimer est activé
  const [secondes, setSecondes] = useState(100); // secondes utilisé pour timer et afficher les réponses
  const [nbTests, setNbTests] = useState(0); // secondes utilisé pour timer et afficher les réponses
  const nbVoulu = 5;

  const [answers, setAnswers] = useState([]); // les 4 choix
  const [score, setScore] = useState(0); // le score +1 quand bon
  const [answer, setAnswer] = useState(""); // la bonne réponse
  const [AnswerArtiste, setAnswerArtiste] = useState(""); // la bonne réponse
  const [audio, setAudio] = useState(""); // l'audio de la bonne réponse
  const [lastI, setLastI] = useState(false); // pour ne pas avoir 2 fois le meme son de suite

  const [change, setChange] = useState(false);

  useEffect(() => {
    const max = listChoice.length;

    let i1 = Math.floor(Math.random() * max);
    while (i1 === lastI) {
      i1 = Math.floor(Math.random() * max);
    }
    let i2 = Math.floor(Math.random() * max);
    while (i2 === lastI || i2 === i1) {
      i2 = Math.floor(Math.random() * max);
    }
    let i3 = Math.floor(Math.random() * max);
    while (i3 === lastI || i3 === i1 || i3 === i2) {
      i3 = Math.floor(Math.random() * max);
    }
    let i4 = Math.floor(Math.random() * max);
    while (i4 === lastI || i4 === i1 || i4 === i2 || i4 === i3) {
      i4 = Math.floor(Math.random() * max);
    }

    const random = Math.floor(Math.random() * 4) + 1;
    if (random === 1) {
      setAnswer(listChoice[i1].titre);
      setAnswerArtiste(listChoice[i1].artiste);
      setAudio(listChoice[i1].mp3);
      setLastI(i1);
    } else if (random === 2) {
      setAnswer(listChoice[i2].titre);
      setAnswerArtiste(listChoice[i2].artiste);
      setAudio(listChoice[i2].mp3);
      setLastI(i2);
    } else if (random === 3) {
      setAnswer(listChoice[i3].titre);
      setAnswerArtiste(listChoice[i3].artiste);
      setAudio(listChoice[i3].mp3);
      setLastI(i3);
    } else {
      setAnswer(listChoice[i4].titre);
      setAnswerArtiste(listChoice[i4].artiste);
      setAudio(listChoice[i4].mp3);
      setLastI(i4);
    }

    setAnswers([
      listChoice[i1],
      listChoice[i2],
      listChoice[i3],
      listChoice[i4],
    ]);
  }, [listChoice, change]);

  const setter = () => {
    setChange(!change);
    setNbTests((old) => old + 1);
  };

  const resetTab = () => {
    setGenreChoice([]);
    setAnneeChoice([]);
  };

  return (
    <div className="btpage">
      <TitleBt />
      <div className="btpagemain">
        <div className="quizz">
          <span className="scoreMobile">
            <ButtonScore score={score} />
          </span>
          <Pochette pochette={pochette} />

          {/* ------------------------------------------ */}
          {secondes > 0 && nbTests < nbVoulu ? (
            <AnswerContainer
              array={answers}
              setScore={setScore}
              answer={answer}
              counterStart={counterStart}
              setChange={setChange}
              change={change}
              setSecondes={setSecondes}
              setNbTests={setNbTests}
            />
          ) : null}
          {secondes <= 0 && nbTests < nbVoulu ? (
            <button type="button" onClick={() => setter()}>
              Next Test
            </button>
          ) : null}
          {nbTests >= nbVoulu ? (
            <button type="button" onClick={() => resetTab()}>
              <Link to="/choice">
                <p>{`Your Score : ${score} / ${nbVoulu}`}</p>
                <p>ON REJOUE ?</p>
              </Link>
            </button>
          ) : null}
          {/* ------------------------------------------ */}

          {nbTests < nbVoulu ? (
            <Player
              className="MusicPlayerBox"
              src={`http://localhost:5000/mp3/${audio}`}
              showJumpControls={false}
              // autoPlay
              // autoPlayAfterSrcChange
              // mettre false pour dev et true en prod
            />
          ) : null}
        </div>

        {nbTests < nbVoulu ? (
          <CounterTime
            change={change}
            setCounterStart={setCounterStart}
            counterStart={counterStart}
            secondes={secondes}
            setSecondes={setSecondes}
          />
        ) : null}

        {/* affiche reponse */}
        {secondes <= 0 && nbTests < nbVoulu ? (
          <div>
            <p>{AnswerArtiste}</p>
            <p>{answer}</p>
          </div>
        ) : null}

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
  setGenreChoice: PropTypes.func.isRequired,
  setAnneeChoice: PropTypes.func.isRequired,
};

export default Btpage;
