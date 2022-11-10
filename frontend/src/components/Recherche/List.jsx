import React from "react";
import PropTypes from "prop-types";

function List({ src, titre, date }) {
  return (
    <div className="searchright">
      <a
        title="play"
        target="_blank"
        href="..\backend\public\mp3\all_along_the_watchtower.mp3"
      >
        <img
          className="imgplaylist"
          src="https://www.pngmart.com/files/3/Play-Button-Transparent-PNG.png"
          alt="pochette album"
        />
      </a>
      <img className="imglist" src={src} alt="pochette album" />
      <h3>{titre}</h3>
      <p>{date}</p>
    </div>
  );
}
List.propTypes = {
  src: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default List;
