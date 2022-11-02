import PropTypes from "prop-types";
import React from "react";

function Favoris({ fav }) {
  return (
    <div>
      <div>
        <h2>VOS FAVORIS</h2>
      </div>
      {fav.map((musicF) => {
        return (
          <a href="http://localhost:3000/">
            {musicF.img} {musicF.artiste} / {musicF.titre} / {musicF.duree} /{" "}
            {musicF.favoris} {musicF.btn} <br />
          </a>
        );
      })}
    </div>
  );
}

Favoris.propTypes = {
  fav: PropTypes.string.isRequired,
};

export default Favoris;
