import React from "react";
import PropTypes from "prop-types";
import Title from "../components/Recherche/Title";
import List from "../components/Recherche/List";
import Filter from "../components/Recherche/Filter";
import "../style/recherche.css";

function Recherche({ songList, update, update2 }) {
  return (
    <div className="rech">
      <div className="all">
        <div className="title">
          <Title />
        </div>
        <div className="listglobal">
          <Filter update={update} update2={update2} />

          {songList.map((song) => (
            <List src={song.pochette} titre={song.titre} date={song.date} />
          ))}
        </div>
      </div>
    </div>
  );
}
Recherche.propTypes = {
  update: PropTypes.string.isRequired,
  update2: PropTypes.string.isRequired,
  songList: PropTypes.string.isRequired,
};
export default Recherche;
