import React from "react";
import PropTypes from "prop-types";

function LastListen({ lastEcoute }) {
  return (
    <div>
      <div>
        <h2>DERNIERE ECOUTE</h2>
      </div>
      <div>
        {lastEcoute.map((music) => {
          return (
            <a href="http://localhost:3000/">
              {music.title} || {music.artist} || {music.pieceToListen} <br />
            </a>
          );
        })}
      </div>
    </div>
  );
}

LastListen.propTypes = {
  lastEcoute: PropTypes.string.isRequired,
};

export default LastListen;
