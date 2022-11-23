import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ButtonOurTests({ name, songArray, setSongArray }) {
  return (
    <div className="eachbutton-our-test">
      <Link to="/test">
        <button type="button" onClick={() => setSongArray(songArray)}>
          {name}
        </button>
      </Link>
    </div>
  );
}

ButtonOurTests.propTypes = {
  name: PropTypes.string.isRequired,
  songArray: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ])
  ).isRequired,
  setSongArray: PropTypes.func.isRequired,
};

export default ButtonOurTests;
