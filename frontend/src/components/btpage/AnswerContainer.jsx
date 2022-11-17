import React from "react";
import PropTypes from "prop-types";
import Answers from "./Answers";

function AnswerContainer({
  array,
  setScore,
  answer,
  counterStart,
  setChange,
  change,
  setSecondes,
  setNbTests,
}) {
  return (
    <div className="answer-container">
      {array.map((arr) => (
        <Answers
          artiste={arr.artiste}
          titre={arr.titre}
          setScore={setScore}
          answer={answer}
          counterStart={counterStart}
          setChange={setChange}
          change={change}
          setSecondes={setSecondes}
          setNbTests={setNbTests}
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
  setChange: PropTypes.func.isRequired,
  change: PropTypes.bool.isRequired,
  setSecondes: PropTypes.func.isRequired,
  setNbTests: PropTypes.func.isRequired,
};
export default AnswerContainer;
