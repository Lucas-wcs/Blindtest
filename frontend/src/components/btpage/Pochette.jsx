import React from "react";
import PropTypes from "prop-types";

function Pochette({ pochette }) {
  return <img className="pochette" alt="pochette" src={pochette} />;
}

Pochette.propTypes = {
  pochette: PropTypes.string.isRequired,
};
export default Pochette;
