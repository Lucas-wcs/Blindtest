import "../style/Btpage.css";
import React, { useState } from "react";

function Btpage() {
  const [score, setScore] = useState(0);

  return (
    <div className="btpage">
      <div className="tittle">
        <h1>BLINDTEST version facile</h1>
      </div>
      <div className="quizzpoints">
        <div className="quizz">
          <div className="pochette">
            <img
              src="https://i.discogs.com/W4bMsFIhfx4xQgX4L1lD7PwtYyaqMgaC30DmSSVu9E4/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1OTYw/Ni0xNDUwMzg5NDI1/LTg4NTIuanBlZw.jpeg"
              alt="empty"
            />
          </div>
          <div className="buttons">
            <div className="buttons12">
              <button
                type="button"
                onClick={() => setScore((oldScore) => oldScore + 1)}
              >
                Reponse 1
              </button>
              <button type="button">Reponse 2</button>
            </div>
            <div className="buttons34">
              <button type="button">Reponse 3</button>
              <button type="button">Reponse 4</button>
            </div>
          </div>
        </div>
        <div className="points">
          <button type="button">Score: {score} </button>
        </div>
      </div>
    </div>
  );
}

export default Btpage;
