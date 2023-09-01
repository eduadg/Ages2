import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import FormularioLogin from './components/FormularioLogin';
import LinksAuxiliares from './components/LinksAuxiliares';
import './styles.css';

// Componente principal da Tela de Login
const TelaLogin = () => (
  <div className="container">
    <Logo />
    <h1>Amparo</h1>
    <FormularioLogin />
    <LinksAuxiliares />
  </div>
);

// Renderizando o componente TelaLogin no elemento com ID "root"
ReactDOM.render(<TelaLogin />, document.getElementById("root"));
