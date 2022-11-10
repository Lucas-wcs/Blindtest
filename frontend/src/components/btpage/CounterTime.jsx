// import Answers from "@components/btpage/Answers";
import React, { useEffect, useState } from "react";

function CounterTime() {
  const startingSecondes = 10;
  const [secondes, setSecondes] = useState(startingSecondes);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (secondes > 0) {
        setSecondes((prevState) => prevState - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (secondes === 0) {
      setDisplay(false);
    }
  }, [secondes]);
  return (
    <div className="timer">
      <p>{display ? secondes : "Time Out !"}</p>
    </div>
  );
}

export default CounterTime;
