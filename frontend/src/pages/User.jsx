import React from "react";
import MyTitle from "../components/user/MyTitle";
import LastListen from "../components/user/LastListen";
import Favoris from "../components/user/Favoris";
import "../style/User.css";
import "boxicons";

function User() {
  const lastEcoute = [
    {
      artist: "Survivor",
      title: "Eye of the tiger",
      pieceToListen: "test",
    },
    {
      artist: "Survivor",
      title: "Eye of the tiger",
      pieceToListen: "test",
    },
    {
      artist: "Survivor",
      title: "Eye of the tiger",
      pieceToListen: "test",
    },
    {
      artist: "Survivor",
      title: "Eye of the tiger",
      pieceToListen: "test",
    },
    {
      artist: "Survivor",
      title: "Eye of the tiger",
      pieceToListen: "test",
    },
  ];

  const fav = [
    {
      img: (
        <img
          className="imgMusic"
          src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
          alt="img"
        />
      ),
      titre: "Eye of the tiger",
      artiste: "Survivor",
      duree: "3:00",
      favoris: true,
      btn: React.createElement(
        "button",
        { type: "button" },
        <box-icon color="orange" name="caret-right-circle" />
      ),
    },
    {
      img: (
        <img
          className="imgMusic"
          src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
          alt="img"
        />
      ),
      titre: "Eye of the tiger",
      artiste: "Survivor",
      duree: "3:00",
      favoris: true,
      btn: React.createElement(
        "button",
        { type: "button" },
        <box-icon color="orange" name="caret-right-circle" />
      ),
    },
    {
      img: (
        <img
          className="imgMusic"
          src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
          alt="img"
        />
      ),
      titre: "Eye of the tiger",
      artiste: "Survivor",
      duree: "3:00",
      favoris: true,
      btn: React.createElement(
        "button",
        { type: "button" },
        <box-icon color="orange" name="caret-right-circle" />
      ),
    },
    {
      img: (
        <img
          className="imgMusic"
          src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
          alt="img"
        />
      ),
      titre: "Eye of the tiger",
      artiste: "Survivor",
      duree: "3:00",
      favoris: true,
      btn: React.createElement(
        "button",
        { type: "button" },
        <box-icon color="orange" name="caret-right-circle" />
      ),
    },
    {
      img: (
        <img
          className="imgMusic"
          src="https://www.noviscore.fr/pochette255-eye-of-the-tiger-survivor.jpg"
          alt="img"
        />
      ),
      titre: "Eye of the tiger",
      artiste: "Survivor",
      duree: "3:00",
      favoris: true,
      btn: React.createElement(
        "button",
        { type: "button" },
        <box-icon color="orange" name="caret-right-circle" />
      ),
    },
  ];

  return (
    <div>
      <header>
        <p>HEADER</p>
      </header>

      <div className="titleUser">
        <MyTitle />
      </div>

      <div className="lastListen">
        <LastListen lastEcoute={lastEcoute} />
      </div>

      <div className="pieceOfMusic">
        <Favoris fav={fav} />
      </div>
    </div>
  );
}

export default User;
