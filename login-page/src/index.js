import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// Componente de Tela de Login
const TelaLogin = () => {
  // Estados para armazenar os valores dos campos de e-mail e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função para lidar com o envio do formulário
  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Senha:", senha);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="/imagens/logoAmparo.png" alt="Logo Amparo" />
      </div>
      <h1>Amparo</h1>
      <form className="form" onSubmit={enviarFormulario}>
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
          <label htmlFor="senha" className="input-label">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <button type="submit" className="botao grande">
            Entrar
          </button>
        </div>
      </form>
      <a href="/esqueceu-senha" className="link-recuperar-senha">
        Esqueceu sua senha?
      </a>
      <p className="texto-cadastro">
        Ainda não tem conta? <a href="/cadastro">Cadastre-se!</a>
      </p>
    </div>
  );
};

// Renderizando o componente TelaLogin no elemento com ID "root"
ReactDOM.render(<TelaLogin />, document.getElementById("root"));
