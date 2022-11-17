import PropTypes from "prop-types";
import React from "react";
import Player from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Favoris({ fav }) {
  return (
    <div>
      <div>
        <h2 className="favorisTitle">VOS FAVORIS</h2>
      </div>
      <div className="aBlock">
        {fav.map((music) => {
          const [isFavorite, setIsFavorite] = React.useState(fav.isFavorite);

          function handleClickFavorite() {
            setIsFavorite(!isFavorite);
          }

          return (
            <div className="musicDivBlock">
              <img className="imgMusic" src={music.pochette} alt="pochette" />
              <p className="titleAndArtist">
                {music.titre} / {music.artiste}
              </p>

              <div
                id="favorite"
                onClick={handleClickFavorite}
                className={isFavorite ? "isFavorite" : "notFavorite"}
                onKeyDown={handleClickFavorite}
                role="presentation"
              />

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

Favoris.propTypes = {
  fav: PropTypes.string.isRequired,
};

export default Favoris;
