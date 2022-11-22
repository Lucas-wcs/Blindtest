import React from "react";
import PropTypes from "prop-types";

function ButtonOurTests({ name , songArray, setOurTest}) {
    return (
      <div className="eachbutton-our-test">
        <button
        onClick={()=> setOurTest(songArray)}
        >{name}</button>
      </div>
    );
  }

ButtonOurTests.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ButtonOurTests;
