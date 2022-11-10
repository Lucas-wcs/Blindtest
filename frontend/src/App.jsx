
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Recherche from "./pages/Recherche";
import BlindTestChoice from "./pages/BlindTestChoice";
import Btpage from "./pages/Btpage";
import User from "./pages/User";
import "./App.css";


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
