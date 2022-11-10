// import Answers from "@components/btpage/Answers";
import React, { useEffect, useState } from "react";

function CounterTime() {
  const startingSecondes = 10;
  const [secondes, setSecondes] = useState(startingSecondes);
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    // console.log("timer started!");
    const interval = setInterval(() => {
      // console.log("timer is décrementing");
      if (secondes > 0) {
        setSecondes((prevState) => prevState - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // useEffect(() => {
  if (secondes === 0) {
    return setDisplay(false);
  }
  // }, [secondes]);
  return (
    <div className="timer">
      <p>{display ? secondes : "Time Out"}</p>
    </div>
  );
}

export default CounterTime;
