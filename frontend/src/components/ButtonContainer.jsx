import React from "react";
import Buttons from "@components/Buttons.jsx";
import PropTypes from "prop-types";

function ButtonContainer({ array }) {
  return (
    <div className="buttons-container">
      <h2 className="title" id="tests-titles">
        TESTS
      </h2>
      {array.map((arr) => (
        <Buttons key={arr.name} name={arr.name} />
      ))}
      ;
    </div>
  );
}

ButtonContainer.propTypes = {
  array: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default ButtonContainer;
