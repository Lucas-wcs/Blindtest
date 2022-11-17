import React from "react";
import PropTypes from "prop-types";

function ButtonOurTests({ name }) {
  return (
    <div className="eachbutton-our-test">
      <button type="button">{name}</button>
    </div>
  );
}

ButtonOurTests.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ButtonOurTests;
