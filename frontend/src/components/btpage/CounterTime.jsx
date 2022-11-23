import PropTypes from "prop-types";
import React, { useEffect } from "react";

function CounterTime({ change, secondes, setSecondes }) {
  const startingSecondes = 20;
  let interval = 0;

  useEffect(() => {
    setSecondes(startingSecondes);
    interval = setInterval(() => {
      setSecondes((prevState) => prevState - 0.5);
    }, 1000);

    return () => clearInterval(interval);
  }, [change]);

  return (
    <div className="timer">
      <p>{secondes > 0 ? secondes : "Time Out !!"}</p>
    </div>
  );
}

CounterTime.propTypes = {
  change: PropTypes.bool.isRequired,
  secondes: PropTypes.number.isRequired,
  setSecondes: PropTypes.func.isRequired,
};

export default CounterTime;
