import React from "react";
import PropTypes from "prop-types";

function Answers({ artiste, titre }) {
  return (
    <div className="answerButton">
      <button value={titre} type="button">
        {`${artiste} :`}
        <br />
        {titre}
      </button>
    </div>
  );
}

Answers.propTypes = {
  artiste: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
};
export default Answers;
