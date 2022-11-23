import React from "react";
import PropTypes from "prop-types";

function ButtonScore({ score }) {
  return (
    <div className="buttonScore">
      <p>{score === 10 ? `Final Score : ${score}/10` : `Score : ${score}`}</p>
    </div>
  );
}

ButtonScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ButtonScore;
