import React, { useState } from "react";
import PropTypes from "prop-types";
import Choice from "./Choice";

function Filter({ update, update2 }) {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div>
      <h1>
        Re<span>c</span>herchez <span>d</span>es tit<span>r</span>es
      </h1>
      <button
        type="button"
        className="filter"
        onClick={() => setOpenFilter(!openFilter)}
      >
        Ouvrir les filtres
      </button>
      {openFilter && <Choice update={update} update2={update2} />}
    </div>
  );
}
Filter.propTypes = {
  update: PropTypes.string.isRequired,
  update2: PropTypes.string.isRequired,
};
export default Filter;
