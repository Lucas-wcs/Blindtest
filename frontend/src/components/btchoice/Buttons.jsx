import PropTypes from "prop-types";

function Buttons({ name, id, handleOnChange }) {
  return (
    <div className="eachbutton">
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={() => handleOnChange(name)}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
}

Buttons.propTypes = {
  name: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Buttons;
