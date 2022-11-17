import React from "react";
import PropTypes from "prop-types";
import Player from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Title({ bigAlbum }) {
  return (
    <div>
      <div className="searchleft">
       
        <div className="bigSong">
          <Player
            className="MusicPlayerBox"
            src={`http://localhost:5000/mp3/${bigAlbum[4]}`}
            showJumpControls={false}
            header = {null}
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            
          />
          <img
            className="imgfirst"
            src={bigAlbum[0]}
            alt="big pochette album"
          />
          <h3>{bigAlbum[1]}</h3>
          <p>{bigAlbum[2]}</p>
          <p>{bigAlbum[3]}</p>
        </div>
       
      </div>
    </div>
  );
}

Title.propTypes = {
  bigAlbum: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.number,
      PropTypes.string,
    ])
    // [src, titre, artiste, date, audio]
  ).isRequired,
};

export default Title;

// arrayOf(
//   PropTypes.shape([
//     PropTypes.object,
//     PropTypes.string,
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.string,
//   ])
// )
