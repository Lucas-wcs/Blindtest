import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Accueil from "./pages/Accueil";
import Recherche from "./pages/Recherche";
import BlindTestChoice from "./pages/BlindTestChoice";
import Btpage from "./pages/Btpage";
import User from "./pages/User";
import "./App.css";

// !!!
// les console.log des tableaux donne les tableaux précédent mais sur la page c'est ok => voir recherche
// FAUT VRAIMENT FAIRE UN CLEAN
// faire les filtres de la page choix
// !!!

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

  // prise du tableau entier
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/music")
      .then((response) => response.data)
      .then((data) => {
        setSongList(data);
        setListChoice(data);
        setList(data);
      });
  }, []);

  // filtre X3 cumulatifs
  useEffect(() => {
    // console.log(annee);
    // console.log(genre);
    // console.log(cherche);
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
    // console.log(songList);
  }, [annee, genre, cherche]);

  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // si rien => prend tout
  // est ce que le genre de chaque élément de l'api est inclu dans genreChoice

  const [anneeChoice, setAnneeChoice] = useState([]);
  const [genreChoice, setGenreChoice] = useState([]);

  // cumulatif => includes ||
  // faire un tableau de set => passer dedans
  // includes => case sensitive

  useEffect(() => {
    // console.log("annee+genre : ");
    // console.log(anneeChoice);
    // console.log(genreChoice);

    if (anneeChoice.includes("1960 & 1970")) {
      // houla pas sûr de ça =>
      anneeChoice.push(1960, 1970);
      const index = anneeChoice.indexOf("1960 & 1970");
      anneeChoice.splice(index, 1); // index à sup , combien à sup
      // <= houla pas sûr de ça
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

    // ---
    // si toutes les années et choix des genres (entre 1 et 4)
    else if (anneeChoice.length === 0 || anneeChoice.length === 6)
      setListChoice(
        list.filter(
          (each) =>
            each.genre.includes(genreChoice[0]) ||
            each.genre.includes(genreChoice[1]) ||
            each.genre.includes(genreChoice[2]) ||
            each.genre.includes(genreChoice[3])
        )
      );
    // ---
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

    // ---
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

    // console.log("listChoice : ");
    // console.log(listChoice);
  }, [anneeChoice, genreChoice, list]);

  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------

  // envoyer setAnneeChoice et setGenreChoice dans la page de choix
  // envoyer la liste optenu (listChoice) dans la page de test
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
                setAnnee={setAnnee}
                setGenre={setGenre}
                setCherche={setCherche}
              />
            )
          }
        />
        {/* ------------------------ */}
        <Route
          path="/choice"
          element={
            <BlindTestChoice
              setGenreChoice={setGenreChoice}
              genreChoice={genreChoice}
              setAnneeChoice={setAnneeChoice}
              anneeChoice={anneeChoice}
            />
          }
        />
        {/* --- */}
        <Route
          path="/test"
          element={
            listChoice.length !== 0 && <Btpage listChoice={listChoice} />
          }
        />
        {/* ------------------------ */}
        <Route path="/user" element={<User myLastListening={list} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
