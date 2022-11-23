import React from "react";
import PropTypes from "prop-types";

function Choice({ setAnnee, setGenre, setCherche }) {
  return (
    <div>
      <div className="buttons">
        <div className="select_filter">
          <select
            name="Epoque"
            id="epoque-select"
            onChange={(event) => setAnnee(event.target.value)}
          >
            <option value="all">Toutes les époques</option>
            <option value="2010">Annee 2010-aujourd'hui</option>
            <option value="2000">Annee 2000-2009</option>
            <option value="1990">Annee 1990-1999</option>
            <option value="1980">Annee 1980-1989</option>
            <option value="1970">Annee 1970-1979</option>
            <option value="1960">Annee 1960-1969</option>
          </select>

          <select
            name="Genre"
            id="genre-select"
            onChange={(event) => setGenre(event.target.value)}
          >
            <option value="">Tous les genres</option>
            <option value="rap">Rap</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="electro">Electro</option>
            <option value="film">Film</option>
          </select>
        </div>

        <input
          type="text"
          className="searchbox"
          placeholder="Recherche par titre"
          onChange={(event) => setCherche(event.target.value)}
        />
      </div>
    </div>
  );
}
Choice.propTypes = {
  setAnnee: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setCherche: PropTypes.func.isRequired,
};
export default Choice;
