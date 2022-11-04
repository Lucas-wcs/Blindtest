import "../style/Btpage.css";
// import AnswerContainer from "@components/btpage/AnswerContainer";
import TitleBt from "@components/btpage/TitleBt";
// import Pochette from "@components/btpage/Pochette";
import ButtonScore from "@components/btpage/ButtonScore";
// import { useState } from "react";
// import axios from "axios";

function Btpage() {
  // const [pochette, setPochette] = useState("");
  // const [answer, setAnswer] = useState("michel");
  // const getSong = () => {
  //   axios
  //     .get("http://localhost:5000/api/music")
  //     .then((response) => response.data)
  //     .then((data) => {
  //       setPochette(data[0].pochette);
  //       console.log(data[0].pochette);
  //       setAnswer(data[0].name);
  //       console.log(data[0].name);
  //     });
  // };
  return (
    <div className="btpage">
      <TitleBt />
      <div className="quizz">
        <span className="scoreMobile">
          <ButtonScore />
        </span>
        {/* <Pochette pochette={pochette} /> */}
        {/* <AnswerContainer array={answer} /> */}
      </div>
      <span className="scoreDesktop">
        <ButtonScore />
      </span>
    </div>
  );
}

export default Btpage;
