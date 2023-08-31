import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="/imagens/logoAmparo.png" alt="Amparo Logo" />
      </div>
      <h1>Amparo</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email" className="input-label">
            E-mail
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>

        <div className="input-group">
          <button type="submit" className="button large">
            Entrar
          </button>
        </div>
      </form>
      <a href="/forgot-password" className="forgot-password-link">
        Esqueceu sua senha?
      </a>
      <p className="signup-text">
        Ainda não tem conta? <a href="/signup">Cadastre-se!</a>
      </p>
    </div>
  );
};

const root = document.getElementById("root");
const appRoot = createRoot(root);

appRoot.render(<Login />);
