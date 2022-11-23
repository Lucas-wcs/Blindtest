import React from "react";
import PropTypes from "prop-types";
import Player from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function List({ src, titre, date, audio, artiste, setBigAlbum }) {
  // {lastEcoute.map((music) => {
  //   const [isFavorite, setIsFavorite] = React.useState(
  //     lastEcoute.isFavorite
  //   );

  //   function handleClickFavorite() {
  //     setIsFavorite(!isFavorite);
  //   }
  return (
    <div className="searchright">
      <Player
        className="MusicPlayerBox"
        src={`http://localhost:5000/mp3/${audio}`}
        showJumpControls={false}
        autoPlay={false}
        autoPlayAfterSrcChange={false}
      />

      <button
        className="playbutton"
        type="button"
        onClick={() => setBigAlbum([src, titre, artiste, date, audio])}
      >
        <img
          className="imglist"
          src={src}
          alt="pochette album"
          loading="lazy"
        />
      </button>
      <h3>{titre}</h3>
      <p>{artiste}</p>
      <p>{date}</p>
      {/* <div
                id="favorite"
                onClick={handleClickFavorite}
                className={isFavorite ? "isFavorite" : "notFavorite"}
                onKeyDown={handleClickFavorite}
                role="presentation"
              /> */}
    </div>
  );
}

List.propTypes = {
  src: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  audio: PropTypes.string.isRequired,
  artiste: PropTypes.string.isRequired,
  setBigAlbum: PropTypes.func.isRequired,
};

export default List;
