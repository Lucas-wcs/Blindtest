import React, { useState, useEffect } from "react";
import "../style/accueil.css";
import axios from "axios";
import BlocAccueil from "../components/accueil/BlocAccueil";

function App() {
  const [pochette, setPochette] = useState(
    "https://e-cdn-images.dzcdn.net/images/cover/e50540d7f752c93e0695ebae272be0c3/264x264-000000-80-0-0.jpg"
  );
  const [pochette2, setPochette2] = useState(
    "https://i1.sndcdn.com/artworks-000077587301-ohm6wx-t500x500.jpg"
  );

  useEffect(() => {
    let i;
    let i2;
    let ilast;
    let i2last;
    setInterval(() => {
      axios
        .get("http://localhost:5000/api/music")
        .then((response) => response.data)
        .then((data) => {
          i = Math.floor(Math.random() * 69);
          while (i === ilast || i === i2last) {
            i = Math.floor(Math.random() * 69);
          }

          i2 = Math.floor(Math.random() * 69);
          while (i2 === i || i2 === i2last || i2 === ilast) {
            i2 = Math.floor(Math.random() * 69);
          }

          ilast = i;
          i2last = i2;

          // i et i2 => jamais les memes et pas ceux d'avant
          setPochette(data[i].pochette);
          setPochette2(data[i2].pochette);
        });
    }, 3000);
  }, []);

  return (
    <div className="pageaccueil">
      <main>
        <h1>
          BLINDTE<span>S</span>T
        </h1>
        <div className="container-block">
          <BlocAccueil h2="blindtest" pochette={pochette} lien="/choice" />
          <BlocAccueil h2="recherche" pochette={pochette2} lien="/recherche" />
        </div>
      </main>
    </div>
  );
}

export default App;
