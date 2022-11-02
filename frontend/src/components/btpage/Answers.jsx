import React from "react";
import PropTypes from "prop-types";

function Answers({ name, title }) {
  return (
    <div className="answerButton">
      <button type="button">
        {name}
        <br />
        {title}
      </button>
    </div>
  );
}

Answers.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Answers;
