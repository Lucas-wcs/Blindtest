import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import Recherche from "./pages/Recherche";
import BlindTestChoice from "./pages/BlindTestChoice";
import Btpage from "./pages/Btpage";
import User from "./pages/User";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/choice" element={<BlindTestChoice />} />
        <Route path="/test" element={<Btpage />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
