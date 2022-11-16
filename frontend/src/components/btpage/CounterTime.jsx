// import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

function CounterTime(setCounterStart, counterStart, change) {
  // lancer la musique en meme temps que le click du button
  // autoriser à répondre seulement quand timer démarré

  // console.log(change);
  const startingSecondes = 5;
  const [secondes, setSecondes] = useState(startingSecondes);
  let interval = 0;

  // const [start, setStart] = useState(false);
  useEffect(() => {
    // console.log(change);
    // console.log("new");
    setSecondes(startingSecondes);
    interval = setInterval(() => {
      setSecondes((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [change]);
  // pourquoi change est undefined

  return (
    <div className="timer">
      <p>{secondes > 0 ? secondes : "Time Out"}</p>
    </div>
  );
}

export default CounterTime;
