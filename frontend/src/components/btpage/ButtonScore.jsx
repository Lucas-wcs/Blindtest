import React from "react";

function ButtonScore(score) {
  return (
    <div className="buttonScore">
      <button type="button">{`Score : ${score}`}</button>
    </div>
  );
}

export default ButtonScore;
