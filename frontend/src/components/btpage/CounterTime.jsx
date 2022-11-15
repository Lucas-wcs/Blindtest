// import PropTypes from "prop-types";
import React, { useState } from "react";

function CounterTime() {
  // lancer la musique en meme temps que le click du button
  // autoriser à répondre seulement quand timer démarré

  let startingSecondes = 5;
  let intervalId = null;
  const [secondes, setSecondes] = useState(startingSecondes);
  // ---
  const finish = () => {
    clearInterval(intervalId);
  };
  const bip = () => {
    startingSecondes -= 1;
    setSecondes(startingSecondes);
    if (startingSecondes <= 0) finish();
  };
  const start = () => {
    intervalId = setInterval(bip, 1000);
  };
  // ---
  const func = (e) => {
    e.preventDefault();
    start();
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(secondes);
  //     secondes -= 1;
  //     setSecondes((prevState) => prevState - 1);

  //     if (secondes < 0) {
  //       console.log("end timer");
  //       setEffectTimer(false);
  //       return () => clearInterval(interval);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // const [display, setDisplay] = useState(true);
  // useEffect(() => {
  //   if (secondes === 0) {
  //     return setDisplay(false);
  //   }
  // }, [secondes]);

  return (
    <div className="timer">
      <p>{secondes > 0 ? secondes : "Time Out"}</p>
      <button type="button" onClick={(e) => func(e)}>
        CLICK TO START
      </button>
    </div>
  );
}

export default CounterTime;
