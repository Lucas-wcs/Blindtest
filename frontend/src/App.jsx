// import Accueil from "./pages/Accueil";
//import Recherche from "./pages/Recherche";
// import Btpage from "./pages/Btpage";
// import User from "./pages/User";
import axios from "axios";
import BlindTestChoice from "./pages/BlindTestChoice";
import React, {useState} from 'react';
import { useEffect } from "react";
import "./style/BlindTestChoice.css"




function App() {
  /* const [songList, setSongList] = useState(true); */



 /*  {songList
    .filter((song) => song.includes(years.name))
    .map((song) => (
      <p>{user}</p>
    ))}-

  useEffect(() => {
      axios
      .get("http://localhost:5000/api/music")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setSongList(data);
      });
  },[]); */

  return (
    <div className="App">
      {/* <Accueil /> */}
      {/*<songList !== undefined && Recherche songList={songList}/>*/}
      {/* <Btpage /> */}
      {/* <User /> */}
       {/* songList !== true &&  */<BlindTestChoice /*songList={songList}*//>}
      
    </div>
  );
}

export default App;
