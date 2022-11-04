import React, { useState } from "react";
import "../style/accueil.css";
import axios from "axios";
import Menu from "../components/Menu";
import BlocAccueil from "../components/accueil/BlocAccueil";

function App() {
  const [pochette, setPochette] = useState(
    "https://e-cdn-images.dzcdn.net/images/cover/e50540d7f752c93e0695ebae272be0c3/264x264-000000-80-0-0.jpg"
  );
  const [pochette2, setPochette2] = useState(
    "https://i1.sndcdn.com/artworks-000077587301-ohm6wx-t500x500.jpg"
  );

  React.useEffect(() => {
    let i;
    let i2;
    setInterval(() => {
      axios
        .get("http://localhost:5000/api/music")
        .then((response) => response.data)
        .then((data) => {
          i = Math.floor(Math.random() * 68);
          i2 = i + 34;
          if (i2 >= 69) {
            i2 -= 69;
          }
          setPochette(data[i].pochette);
          setPochette2(data[i2].pochette);
        });
      // pochette1 et pochette2 => jamais les memes
    }, 3000);
  }, []);

  return (
    <div>
      <Menu />
      <main>
        <h1>
          BLINDTE<span>S</span>T
        </h1>
        <div className="container-block">
          <BlocAccueil h2="blindtest" pochette={pochette} />
          <BlocAccueil h2="recherche" pochette={pochette2} />
        </div>
      </main>
    </div>
  );
}

export default App;
