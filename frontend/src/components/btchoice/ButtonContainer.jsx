import React from "react";
import Buttons from "@components/btchoice/Buttons";
import PropTypes from "prop-types";

function ButtonContainer({ array, choice, setChoice }) {
  const handleOnChange = (what) => {
    if (choice.includes(1960) && what === "1960 & 1970") {
      setChoice((prev) =>
        prev.filter((each) => each !== 1960 && each !== 1970)
      );
    } else if (choice.includes(what)) {
      setChoice((prev) => prev.filter((each) => each !== what));
    } else {
      setChoice((oldArray) => [...oldArray, what]);
    }
  };

  return (
    <div className="buttons-container">
      <h2 className="tests-titles">CHOISIS TON TEST</h2>
      {array.map((each) => (
        <Buttons
          name={each.name}
          id={each.id}
          handleOnChange={handleOnChange}
        />
      ))}
    </div>
  );
}

ButtonContainer.propTypes = {
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

export default ButtonContainer;
