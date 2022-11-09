import "../style/Btpage.css";
import AnswerContainer from "@components/btpage/AnswerContainer";
import TitleBt from "@components/btpage/TitleBt";
import Pochette from "@components/btpage/Pochette";
import ButtonScore from "@components/btpage/ButtonScore";
import { useState, useEffect } from "react";
import axios from "axios";
// import CounterTime from "./CounterTime";
// import TimeOut from "./TimeOut";

function Btpage() {
  const [pochette, setPochette] = useState(
    "https://images.pexels.com/photos/3831187/pexels-photo-3831187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState(0);
  // const [timer,setTimer] = useState(true)
  useEffect(() => {
    let i;
    let i2;
    let i3;
    let y;

    axios
      .get("http://localhost:5000/api/music")
      .then((response) => response.data)
      .then((data) => {
        i = Math.floor(Math.random() * 15);

        i2 = Math.floor(Math.random() * 15);
        while (i2 === i) {
          i2 = Math.floor(Math.random() * 15);
        }
        i3 = Math.floor(Math.random() * 15);
        while (i3 === i || i3 === i2) {
          i3 = Math.floor(Math.random() * 15);
        }
        y = i;
        setAnswer([data[i], data[i2], data[i3], data[i + 1]]);
        setScore((oldScore) => oldScore + 1);
        setPochette(data[y]);
      });
  }, []);
  return (
    <div className="btpage">
      <TitleBt />
      <div className="btpagemain">
        <div className="quizz">
          <span className="scoreMobile">
            <ButtonScore />
          </span>
          {pochette !== "" && <Pochette pochette={pochette} />}
          {answer !== [] && <AnswerContainer array={answer} />}
        </div>
        {/* {timer ?<CounterTime />:<TimeOut/>} */}
        <span className="scoreDesktop">
          <ButtonScore score={score} />
        </span>
      </div>
    </div>
  );
}

export default Btpage;
