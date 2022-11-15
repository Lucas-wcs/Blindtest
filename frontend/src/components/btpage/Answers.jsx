import React from "react";
import PropTypes from "prop-types";

function Answers({ artiste, titre, setScore, answer }) {
  // dans la fonction pour augmenter le score mettre && TimerStart
  const isTrue = (e) => {
    e.preventDefault();
    if (e.target.value === answer) {
      setScore((lastScore) => lastScore + 1);
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
};
export default Answers;
