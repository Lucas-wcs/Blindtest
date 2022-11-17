import React from "react";
import PropTypes from "prop-types";

function Answers({
  artiste,
  titre,
  setScore,
  answer,
  setChange,
  change,
  setSecondes,
  setNbTests,
}) {
  const isTrue = (e) => {
    e.preventDefault();
    if (e.target.value === answer) {
      setChange(!change);
      setScore((lastScore) => lastScore + 1);
      setNbTests((old) => old + 1);
    } else {
      setSecondes(-1);
    }
  };

  return (
    <div className="answerButton">
      <button value={titre} type="button" onClick={(e) => isTrue(e)}>
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
  setScore: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
  setChange: PropTypes.func.isRequired,
  change: PropTypes.bool.isRequired,
  setSecondes: PropTypes.func.isRequired,
  setNbTests: PropTypes.func.isRequired,
};
export default Answers;
