import React from "react";
import PropTypes from "prop-types";
import Answers from "./Answers";

function AnswerContainer({ array, setScore, answer, counterStart }) {
  // array = tout l'objet
  return (
    <div className="answer-container">
      {array.map((arr) => (
        <Answers
          artiste={arr.artiste}
          titre={arr.titre}
          setScore={setScore}
          answer={answer}
          counterStart={counterStart}
        />
      ))}
    </div>
  );
}
AnswerContainer.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape([PropTypes.string, PropTypes.string])
  ).isRequired,
  setScore: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
  counterStart: PropTypes.bool.isRequired,
};
export default AnswerContainer;
