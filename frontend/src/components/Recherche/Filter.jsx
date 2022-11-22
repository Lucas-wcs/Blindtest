import React, { useState } from "react";
import PropTypes from "prop-types";
import Choice from "./Choice";

function Filter({ setAnnee, setGenre, setCherche }) {
  const [openFilter, setOpenFilter] = useState(false);
  function openFilters() {
    setOpenFilter(!openFilter);
  }

  const [isOpen, setIsOpen] = useState(false);
  function handleChange() {
    setIsOpen(!isOpen);
  }

  function changement() {
    handleChange();
    openFilters();
  }
  return (
    <div>
      <h1>
        Re<span>c</span>hercher <span>d</span>es tit<span>r</span>es
      </h1>
      <button type="button" className="filter" onClick={changement}>
        {!isOpen ? "Ouvrir" : "Fermer"} les filtres
      </button>
      {openFilter && (
        <Choice
          setAnnee={setAnnee}
          setGenre={setGenre}
          setCherche={setCherche}
        />
      )}
    </div>
  );
}
Filter.propTypes = {
  setAnnee: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setCherche: PropTypes.func.isRequired,
};
export default Filter;
