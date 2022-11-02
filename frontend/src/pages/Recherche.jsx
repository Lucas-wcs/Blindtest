import React from "react";
import Title from "../components/Recherche/Title";
import List from "../components/Recherche/List";
import Filter from "../components/Recherche/Filter";

import "../style/recherche.css";

function Rechecrhe() {
  return (
    <div className="App">
      <div className="all">
        <div className="title">
          <Title />
        </div>
        <div className="listglobal">
          <Filter />

          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </div>
    </div>
  );
}

export default Rechecrhe;
