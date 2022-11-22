import React from "react";
import ButtonOurTests from "./ButtonOurTests";
/* import PropTypes from "prop-types"; */

function ButtonContainerOT({array, setOurTest})
 {
  return (
    <div className="buttons-container">
      <h2 className="title-our-test" id="tests-titles">
        NOS TESTS
      </h2> 
      {array && array.map((arr) => (
        <ButtonOurTests name={arr.name} id={arr.id} setOurTest={setOurTest} songArray={arr.songArray}/>
      ))}
    </div>
  );
}


export default ButtonContainerOT;


/* ButtonContainer.propTypes = {
  setChoice: PropTypes.func.isRequired,

  array: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ])
  ).isRequired,

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
