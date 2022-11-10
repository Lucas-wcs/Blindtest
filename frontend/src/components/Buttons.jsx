import PropTypes from "prop-types";

function Buttons({ name, id }) {
  return (
    <div className="eachbutton">
      <input
        type="checkbox"
        id={id}
        name={id}
        onChange={(e) => e.target.value}
      />
      <label htmlFor={id}>{name}</label>
    </div>
    /*     <button id={id} type="button" >
        {name}
      </button> */
  );
}

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Buttons;
