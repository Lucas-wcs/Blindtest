import React from "react";
import PropTypes from "prop-types";
import Player from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function LastListen({ lastEcoute }) {
  return (
    <div>
      <div>
        <h2 className="lastListenTitle">DERNIERE ECOUTE</h2>
      </div>
      <div className="aBlock">
        {lastEcoute.map((music) => {
          // console.log(music.mp3);
          return (
            <div>
              <img src={music.pochette} alt="pochette" />
              <p>
                {music.titre} {music.artiste}
              </p>
              <Player
                style={{ borderRadius: "1rem" }}
                src={`http://localhost:5000/mp3/${music.mp3}`}
                showJumpControls={false}
              />
            </div>
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
