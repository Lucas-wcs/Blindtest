import React from "react";
import PropTypes from "prop-types";

function ButtonScore({ score }) {
  return (
    <div className="buttonScore">
      <button type="button">Score : {score}</button>
    </div>
  );
}

ButtonScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ButtonScore;
