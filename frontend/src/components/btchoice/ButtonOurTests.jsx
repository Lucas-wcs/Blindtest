import React from "react";
/* import Buttons from "@components/btchoice/Buttons";
import PropTypes from "prop-types"; */

function ButtonOurTests({ name , songArray, setOurTest}) {
    return (
      <div className="eachbutton-our-test">
        <button
        onClick={()=> setOurTest(songArray)}
        >{name}</button>
      </div>
    );
  }

/* ButtonOurTest.propTypes = {
  setChoice: PropTypes.func.isRequired,

 
  choice: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ])
  ).isRequired,
};
 */
export default ButtonOurTests;
