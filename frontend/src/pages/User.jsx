import React, {useState} from "react";
import MyTitle from "../components/user/MyTitle";
import LastListen from "../components/user/LastListen";
import Favoris from "../components/user/Favoris";
import "../style/User.css";
import "../App.css";
import "boxicons";
import axios from "axios";



function User() {
  const [artiste, setArtiste] = useState("");
  React.useEffect(() => {axios
    .get("http://localhost:5000/api/music")
    .then((response) => response.data)
    .then((data) => {
      setArtiste(data[id].artiste);
      console.log(data[id].setArtiste);
    });}, []);
  


const test = [
  {
    id: 28,
    pochette:
      "https://i.discogs.com/x67-g5p0pKsA9pAogDwEFG7y4WJalY6N2eP8Eh542q0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzNTQ4/My0xNDYxODUzMTE3/LTczODQuanBlZw.jpeg",
    titre: "dirty dancing",
    artiste: "bill medley",
    date: "1987",
    genre: "film",
    mp3: "dirty_dancing.mp3",
  
      },
      {
        id: 2,
        pochette:
          "https://e-cdn-images.dzcdn.net/images/cover/1e67034f2e56796abe33e4c8a33b64ed/264x264-000000-80-0-0.jpg",
        titre: "la terre est ronde",
        artiste: "orelsan",
        date: "2011",
        genre: "rap",
        mp3: "la_terre_est_ronde.mp3",
      },
]

  // const lastEcoute = [
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     artist: "Survivor",
  //     title: "Eye of the tiger",
  //     pieceToListen: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     artist: "Survivor",
  //     title: "Eye of the tiger",
  //     pieceToListen: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     artist: "Survivor",
  //     title: "Eye of the tiger",
  //     pieceToListen: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     artist: "Survivor",
  //     title: "Eye of the tiger",
  //     pieceToListen: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     artist: "Survivor",
  //     title: "Eye of the tiger",
  //     pieceToListen: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  // ];

  // const fav = [
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     titre: "Eye of the tiger",
  //     artiste: "Survivor",
  //     duree: "3:00",
  //     favoris: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     titre: "Eye of the tiger",
  //     artiste: "Survivor",
  //     duree: "3:00",
  //     favoris: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     titre: "Eye of the tiger",
  //     artiste: "Survivor",
  //     duree: "3:00",
  //     favoris: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     titre: "Eye of the tiger",
  //     artiste: "Survivor",
  //     duree: "3:00",
  //     favoris: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     titre: "Eye of the tiger",
  //     artiste: "Survivor",
  //     duree: "3:00",
  //     favoris: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     titre: "Eye of the tiger",
  //     artiste: "Survivor",
  //     duree: "3:00",
  //     favoris: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     titre: "Eye of the tiger",
  //     artiste: "Survivor",
  //     duree: "3:00",
  //     favoris: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  //   {
  //     img: (
  //       <img
  //         className="imgMusic"
  //         src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
  //         alt="img"
  //       />
  //     ),
  //     titre: "Eye of the tiger",
  //     artiste: "Survivor",
  //     duree: "3:00",
  //     favoris: "Favoris",
  //     btn: React.createElement(
  //       "button",
  //       { type: "button" },
  //       <box-icon color="orange" name="caret-right-circle" />
  //     ),
  //   },
  // ];

  return (
    <div>
      <header>
        <p>HEADER</p>
      </header>
      <div className="blockMusic">
        <div className="titleAndLast">
          <div className="titleUser">
            <MyTitle />
          </div>

          <div className="lastListen">
            <LastListen lastEcoute={test} />
          </div>
        </div>

        <div className="pieceOfMusic">
          <Favoris fav={test} />
        </div>
      </div>
    </div>
  );
}

export default User;
