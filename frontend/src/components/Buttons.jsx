import React from "react";
import PropTypes from "prop-types";

function Buttons({ name }) {
  return (
    <div className="eachbutton">
      <button type="button">{name}</button>
    </div>
  );
}

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Buttons;
