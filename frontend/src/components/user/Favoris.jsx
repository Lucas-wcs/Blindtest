import PropTypes from "prop-types";
import React from "react";

function Favoris({ fav }) {
  return (
    <div>
      <div>
        <h2 className="favorisTitle">VOS FAVORIS</h2>
      </div>
      <div className="aBlock">
        {fav.map((musicF) => {
          return (
            <div>
            <img src={musicF.pochette} alt="pochette" />
            <p>{musicF.titre}  {musicF.artiste}</p>
          </div>
           
          );
        })}
      </div>
    </div>
  );
}

Favoris.propTypes = {
  fav: PropTypes.string.isRequired,
};

export default Favoris;
