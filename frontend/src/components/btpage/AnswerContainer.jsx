import React from "react";
import PropTypes from "prop-types";
import Answers from "./Answers";

function AnswerContainer({ array }) {
  return (
    <div className="answer-container">
      {array.map((arr) => (
        <Answers artiste={arr.artiste} titre={arr.titre} />
      ))}
    </div>
  );
}
AnswerContainer.propTypes = {
  array: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
export default AnswerContainer;
