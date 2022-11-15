import React, { useState } from "react";
import PropTypes from "prop-types";
import Title from "../components/Recherche/Title";
import List from "../components/Recherche/List";
import Filter from "../components/Recherche/Filter";
import "../style/recherche.css";
import Menu from "../components/Menu";

function Recherche({ songList, setAnnee, setGenre, setCherche }) {
  const [bigAlbum, setBigAlbum] = useState([
    "https://e-cdn-images.dzcdn.net/images/cover/d26b907ad10293b61b3d1b4b845e153b/264x264-000000-80-0-0.jpg",
    "bande organisee",
    "13 organise",
    2020,
    "bande_organisee.mp3",
  ]);

  return (
    <div className="rech">
      <Menu />
      <div className="all">
        <div className="title">
          <Title bigAlbum={bigAlbum} />
        </div>
        <div className="listglobal">
          <Filter
            setAnnee={setAnnee}
            setGenre={setGenre}
            setCherche={setCherche}
          />

          <div className="allSong">
            {songList.map((song) => (
              <List
                artiste={song.artiste}
                src={song.pochette}
                titre={song.titre}
                date={song.date}
                audio={song.mp3}
                setBigAlbum={setBigAlbum}
                bigAlbum={bigAlbum}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
Recherche.propTypes = {
  setAnnee: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setCherche: PropTypes.func.isRequired,
  songList: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
    ])
  ).isRequired,
};
export default Recherche;
