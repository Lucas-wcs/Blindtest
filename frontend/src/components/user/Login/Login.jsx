import React, { useState } from "react";
import PropTypes from "prop-types";
import "./login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Page de connexion utilisateur</h1>
      <form className="formUser" onSubmit={handleSubmit}>
        <label>
          <p className="userNameConnexion">Nom utilisateur</p>
          <input className="inputButton"
            placeholder="Entrez votre nom"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <p className="passwordUserConnexion">Mot de passe</p>
          <input className="inputButton"
            placeholder="Entrez votre mot de passe"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button className="buttonSend" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
