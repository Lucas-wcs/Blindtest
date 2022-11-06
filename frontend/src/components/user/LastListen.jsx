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
          return (
            <div className="musicDivBlock">
              <img className="imgMusic" src={music.pochette} alt="pochette" />
              <p className="titleAndArtist">
                {music.titre} / {music.artiste}
              </p>
              <Player
                className="MusicPlayerBox"
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
