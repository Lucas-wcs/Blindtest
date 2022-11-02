import React from "react";
import PropTypes from "prop-types";

function BlocAccueil({ h2, pochette }) {
  return (
    <div className="accueil-bloc">
      <h2>{h2}</h2>
      <div className="img-but">
        <img src={pochette} alt={pochette} />
        <a href="./blindtest">LET'S GO</a>
      </div>
    </div>
  );
}

BlocAccueil.propTypes = {
  h2: PropTypes.string.isRequired,
  pochette: PropTypes.string.isRequired,
};

export default BlocAccueil;
