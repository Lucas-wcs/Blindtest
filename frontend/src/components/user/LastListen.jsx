import React from "react";
import PropTypes from "prop-types";

function LastListen({ lastEcoute }) {
  return (
    <div>
      <div>
        <h2 className="lastListenTitle">DERNIERE ECOUTE</h2>
      </div>
      <div className="aBlock">
        {lastEcoute.map((music) => {
          return (


           

            <div>
              <img src={music.pochette} alt="pochette" />
              <p>{music.titre}  {music.artiste}</p>
              <audio src={music.mp3}></audio>
            </div>

          



            // <a href="http://localhost:3000/">
            //   {music.img} {music.title} / {music.artist} / {music.pieceToListen}{" "}
            //   {music.btn} <br />
            // </a>
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
