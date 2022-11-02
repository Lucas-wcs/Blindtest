import React from "react";
import PropTypes from "prop-types";
import Answers from "./Answers";

function AnswerContainer({ array }) {
  return (
    <div className="answer-container">
      {array.map((arr) => (
        <Answers
          name={arr.name}
          title={arr.title}
          id={arr.id}
          pochette={arr.pochette}
        />
      ))}
    </div>
  );
}
AnswerContainer.propTypes = {
  array: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
export default AnswerContainer;
