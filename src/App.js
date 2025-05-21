import React from 'react';
import "./App.css";
import logo from './assets/logo.png';

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '128px' }}>
          <div className="logo">
            <a href=".">
              <img src={logo} alt="Symbole de StartYourAsso" style={{ width: '128px', height: '128px' }}/>
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Votre association comme vous ne l'avez jamais vue.</h1>
            <p>Nous arrivons bientôt, nous préparons tout ! Restez connectés 😉</p>
          </div>
          <a href="mailto:contact@startyourasso.fr">
            <div className="cta">Envoyez-nous de la force !</div>
          </a>
        </div>
        <div className="footer">
          <span>Membre de <a className="underlined" href="https://zenyx.fr" target="_blank" rel="noopener noreferrer">Zenyx Group - Fondé en 🇫🇷</a></span>
        </div>
      </div>
    );
  }
}

export default App;
