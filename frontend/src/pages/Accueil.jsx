import React from "react";
import "./accueil.css";
import Menu from "../components/Menu";
import BlocAccueil from "../components/BlocAccueil";

function App() {
  return (
    <div>
      <Menu />
      <main>
        <h1>
          BLINDTE<span>S</span>T
        </h1>
        <div className="container-block">
          <BlocAccueil
            h2="blindtest"
            pochette="https://e-cdn-images.dzcdn.net/images/cover/e50540d7f752c93e0695ebae272be0c3/264x264-000000-80-0-0.jpg"
          />
          <BlocAccueil
            h2="recherche"
            pochette="https://e-cdn-images.dzcdn.net/images/cover/af32df247aac316125d0f413c1819681/264x264-000000-80-0-0.jpg"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
