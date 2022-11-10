import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Accueil from "./pages/Accueil";
import Recherche from "./pages/Recherche";
import BlindTestChoice from "./pages/BlindTestChoice";
import Btpage from "./pages/Btpage";
import User from "./pages/User";
import "./App.css";

function App() {
  const [List, setList] = useState([]);
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/music")
      .then((response) => response.data)
      .then((data) => {
        setSongList(data);
        setList(data);
      });
  }, []);

  function update2(genre) {
    switch (genre) {
      case "all":
        setSongList(List.filter((each) => each.date >= 0));
        break;
      case "rap":
        setSongList(List.filter((each) => each.genre === "rap"));
        break;
      case "pop":
        setSongList(List.filter((each) => each.genre === "pop"));
        break;
      case "rock":
        setSongList(List.filter((each) => each.genre === "rock"));
        break;
      case "electro":
        setSongList(List.filter((each) => each.genre === "electro"));
        break;
      case "film":
        setSongList(List.filter((each) => each.genre === "film"));
        break;

      default:
    }
  }

  function update(annee) {
    switch (annee) {
      case "all":
        setSongList(List.filter((each) => each.date >= 0));
        break;
      case "2011":
        setSongList(List.filter((each) => each.date >= 2011));
        break;
      case "2000":
        setSongList(
          List.filter((each) => each.date >= 2000 && each.date <= 2010)
        );
        break;
      case "1990":
        setSongList(
          List.filter((each) => each.date >= 1990 && each.date <= 1999)
        );
        break;
      case "1980":
        setSongList(
          List.filter((each) => each.date >= 1980 && each.date <= 1989)
        );
        break;
      case "1960":
        setSongList(
          List.filter((each) => each.date >= 1960 && each.date <= 1979)
        );
        break;

      default:
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route
          path="/recherche"
          element={
            songList !== undefined && (
              <Recherche
                songList={songList}
                update={update()}
                update2={update2()}
              />
            )
          }
        />
        <Route path="/choice" element={<BlindTestChoice />} />
        <Route path="/test" element={<Btpage />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
