import React from "react";
import PropTypes from "prop-types";

function Choice({ update, update2 }) {
  return (
    <div>
      <div className="buttons">
        <div className="select_filter">
          <select
            name="Epoque"
            id="epoque-select"
            onChange={(event) => update(event.target.value)}
          >
            <option value="all">All</option>
            <option value="2011">Actuel</option>
            <option value="2000">Annee 2000-2010</option>
            <option value="1990">Annee 1990-1999</option>
            <option value="1980">Annee 1980-1989</option>
            <option value="1960">Annee 1960-1979</option>
          </select>

          <select
            name="Genre"
            id="genre-select"
            onChange={(event) => update2(event.target.value)}
          >
            <option value="all">All</option>
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
          name="name"
          required
          size="20"
          placeholder="Recherche par titre"
        />
      </div>

      <button
        type="button"
        className="go"
        onClick={(event) => update(event.target.value)}
      >
        GO !
      </button>
    </div>
  );
}
Choice.propTypes = {
  update: PropTypes.string.isRequired,
  update2: PropTypes.string.isRequired,
};
export default Choice;
