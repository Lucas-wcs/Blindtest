import React from "react";
import PropTypes from "prop-types";

function Buttons({ name, id }) {
  return (
    <div className="eachbutton">
      <button id={id} type="button">{name}</button>
    </div>
  );
}

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Buttons;
