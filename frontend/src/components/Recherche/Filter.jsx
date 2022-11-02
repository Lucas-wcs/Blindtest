import React from "react";

function Choice() {
  return (
    <div>
      <div className="buttons">
        <fieldset className="choice">
          <legend>Genre</legend>

          <div>
            <input type="checkbox" id="check" name="drone" value="Rock" />
            <label htmlFor="huey"> Rock</label>
          </div>

          <div>
            <input type="checkbox" id="check" name="drone" value="Pop" />
            <label htmlFor="dewey"> Pop</label>
          </div>

          <div>
            <input type="checkbox" id="check" name="drone" value="Film" />
            <label htmlFor="louie"> Film</label>
          </div>
          <div>
            <input type="checkbox" id="check" name="drone" value="Rap" />
            <label htmlFor="louie"> Rap</label>
          </div>
          <div>
            <input type="checkbox" id="check" name="drone" value="Electro" />
            <label htmlFor="louie"> Electro</label>
          </div>
        </fieldset>

        <fieldset className="choice">
          <legend>Epoque</legend>

          <div>
            <input type="checkbox" id="check" name="drone" value="actuel" />
            <label htmlFor="huey"> Actuel</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="check"
              name="drone"
              value="annee_2000-2010"
            />
            <label htmlFor="dewey"> Annee 2000-2010</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="check"
              name="drone"
              value="annee_1990-2000"
            />
            <label htmlFor="louie"> Annee 1990-2000</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="check"
              name="drone"
              value="annee_1960-2000"
            />
            <label htmlFor="louie"> Annee 1960-2000</label>
          </div>
        </fieldset>
        <input
          type="text"
          className="searchbox"
          name="name"
          required
          size="20"
          placeholder="Recherche par titre"
        />
      </div>

      <button type="button" className="go">
        GO !
      </button>
    </div>
  );
}

function Filter() {
  return (
    <div>
      <h1>
        Re<span>c</span>herchez <span>d</span>es tit<span>r</span>es
      </h1>
      <button
        type="button"
        className="filter"
        onClick={() => {
          Choice();
        }}
      >
        Ouvrir les filtres
      </button>
    </div>
  );
}

export default Filter;
