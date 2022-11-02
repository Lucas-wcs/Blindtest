import "../style/Btpage.css";
import AnswerContainer from "@components/btpage/AnswerContainer";
import TitleBt from "@components/btpage/TitleBt";
import Pochette from "@components/btpage/Pochette";
import ButtonScore from "@components/btpage/ButtonScore";

function Btpage() {
  const test = [
    {
      name: "Michael Jackson",
      title: "Smooth Criminal",
      pochette:
        "https://images.pexels.com/photos/10096370/pexels-photo-10096370.jpeg?cs=srgb&dl=pexels-karolis-samuolis-10096370.jpg&fm=jpg",
    },
    { name: "ACDC", title: "Highway To Hell", pochette: "bernard" },
    { name: "2Pac", title: "Can't C Me", pochette: "polo" },
    { name: "Lady Gaga", title: "Poker Face", pochette: "polo" },
  ];
  return (
    <div className="btpage">
      <TitleBt />
      <div className="quizz">
        <span className="scoreMobile">
          <ButtonScore />
        </span>
        <Pochette pochette="https://images.pexels.com/photos/3867522/pexels-photo-3867522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <AnswerContainer array={test} />
      </div>
      <span className="scoreDesktop">
        <ButtonScore />
      </span>
    </div>
  );
}

export default Btpage;
