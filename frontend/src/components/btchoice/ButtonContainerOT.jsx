import React from "react";
import PropTypes from "prop-types";
import ButtonOurTests from "./ButtonOurTests";

function ButtonContainerOT({ array }) {
  return (
    <div className="buttons-container">
      <h2 className="title-our-test" id="tests-titles">
        NOS TESTS
      </h2>
      {array && array.map((arr) => <ButtonOurTests name={arr.name} />)}
    </div>
  );
}

export default ButtonContainerOT;

ButtonContainerOT.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ])
  ).isRequired,
};
