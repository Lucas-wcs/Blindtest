import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Accueil from "./pages/Accueil";
import Recherche from "./pages/Recherche";
import BlindTestChoice from "./pages/BlindTestChoice";
import Btpage from "./pages/Btpage";
import User from "./pages/User";
import Menu from "./components/Menu";
import Connexion from "./pages/Connexion";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  const [songList, setSongList] = useState([]);
  const [listChoice, setListChoice] = useState([]);

  const [annee, setAnnee] = useState("all");
  const [genre, setGenre] = useState("");
  const [cherche, setCherche] = useState("");

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get("http://localhost:5000/api/music", {
        cancelToken: source.token,
      })
      .then((response) => response.data)
      .then((data) => {
        setSongList(data);
        setListChoice(data);
        setList(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    if (annee === "all") {
      setSongList(
        list
          .filter((each) => each.genre.includes(genre))
          .filter(
            (each) =>
              each.titre.toLowerCase().includes(cherche.toLowerCase()) ||
              each.artiste.toLowerCase().includes(cherche.toLowerCase())
          )
      );
    } else if (annee === "2010") {
      setSongList(
        list
          .filter((each) => each.date >= 2010)
          .filter((each) => each.genre.includes(genre))
          .filter(
            (each) =>
              each.titre.toLowerCase().includes(cherche.toLowerCase()) ||
              each.artiste.toLowerCase().includes(cherche.toLowerCase())
          )
      );
    } else {
      const anneeInt = parseInt(annee, 10);
      setSongList(
        list
          .filter((each) => each.date >= anneeInt && each.date <= anneeInt + 9)
          .filter((each) => each.genre.includes(genre))
          .filter(
            (each) =>
              each.titre.toLowerCase().includes(cherche.toLowerCase()) ||
              each.artiste.toLowerCase().includes(cherche.toLowerCase())
          )
      );
    }
  }, [annee, genre, cherche]);

  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------

  const [anneeChoice, setAnneeChoice] = useState([]);
  const [genreChoice, setGenreChoice] = useState([]);

  useEffect(() => {
    if (anneeChoice.includes("1960 & 1970")) {
      anneeChoice.push(1960, 1970);
      const index = anneeChoice.indexOf("1960 & 1970");
      anneeChoice.splice(index, 1);
    }

    // si 0/0 ou 6/5 ou 0/5 ou 6/0 => prendre tout
    if (
      (anneeChoice.length === 0 && genreChoice.length === 0) ||
      (anneeChoice.length === 6 && genreChoice.length === 5) ||
      (anneeChoice.length === 0 && genreChoice.length === 5) ||
      (anneeChoice.length === 6 && genreChoice.length === 0)
    ) {
      setListChoice(list);
    }

    // si toutes les années et choix des genres (entre 1 et 4)
    else if (anneeChoice.length === 0 || anneeChoice.length === 6) {
      setListChoice(
        list.filter(
          (each) =>
            each.genre.includes(genreChoice[0]) ||
            each.genre.includes(genreChoice[1]) ||
            each.genre.includes(genreChoice[2]) ||
            each.genre.includes(genreChoice[3])
        )
      );
    }
    // si tous les genres et choix des années (entre 1 et 5)
    else if (genreChoice.length === 0 || genreChoice.length === 5) {
      setListChoice(
        list.filter(
          (each) =>
            (each.date >= anneeChoice[0] && each.date <= anneeChoice[0] + 9) ||
            (each.date >= anneeChoice[1] && each.date <= anneeChoice[1] + 9) ||
            (each.date >= anneeChoice[2] && each.date <= anneeChoice[2] + 9) ||
            (each.date >= anneeChoice[3] && each.date <= anneeChoice[3] + 9) ||
            (each.date >= anneeChoice[4] && each.date <= anneeChoice[4] + 9)
        )
      );
    }

    // si genres (entre 1 et 4) et années (entre 1 et 5)
    else {
      setListChoice(
        list.filter(
          (each) =>
            (each.genre.includes(genreChoice[0]) ||
              each.genre.includes(genreChoice[1]) ||
              each.genre.includes(genreChoice[2]) ||
              each.genre.includes(genreChoice[3])) &&
            ((each.date >= anneeChoice[0] && each.date <= anneeChoice[0] + 9) ||
              (each.date >= anneeChoice[1] &&
                each.date <= anneeChoice[1] + 9) ||
              (each.date >= anneeChoice[2] &&
                each.date <= anneeChoice[2] + 9) ||
              (each.date >= anneeChoice[3] &&
                each.date <= anneeChoice[3] + 9) ||
              (each.date >= anneeChoice[4] && each.date <= anneeChoice[4] + 9))
        )
      );
    }
  }, [anneeChoice, genreChoice, list]);
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------

  const [songArray, setSongArray] = useState([]);

  useEffect(() => {
    const newArray = [];
    songArray.forEach((element) => {
      newArray.push(list.find((music) => music.id === element));
    });
    setListChoice(newArray);
  }, [songArray]);

  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------

  return (
    <BrowserRouter>
      <div>
        <Menu setGenreChoice={setGenreChoice} setAnneeChoice={setAnneeChoice} />
        <Routes>
          <Route
            exact
            path="/"
            element={list.length !== 0 && <Accueil data={list} />}
          />
          <Route
            path="/recherche"
            element={
              songList !== undefined && (
                <Recherche
                  songList={songList}
                  setAnnee={setAnnee}
                  setGenre={setGenre}
                  setCherche={setCherche}
                />
              )
            }
          />
          <Route
            path="/choice"
            element={
              <BlindTestChoice
                setGenreChoice={setGenreChoice}
                genreChoice={genreChoice}
                setAnneeChoice={setAnneeChoice}
                anneeChoice={anneeChoice}
                listChoice={listChoice}
                setSongArray={setSongArray}
              />
            }
          />
          <Route
            path="/test"
            element={
              listChoice.length !== 0 && (
                <Btpage
                  listChoice={listChoice}
                  setGenreChoice={setGenreChoice}
                  setAnneeChoice={setAnneeChoice}
                />
              )
            }
          />
          <Route path="/user" element={<User myLastListening={list} />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
