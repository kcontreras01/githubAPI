import React, { Component } from 'react';
import logo from './logo.svg';
import Etherium from './components/Etherium';
import Bitcoin from './components/Bitcoin';
import Ripple from './components/Ripple';
import EOS from './components/EOS';
import CCXT from './components/ccxt';
import Zenbot from './components/Zenbot';
import SingleCard from './components/SingleCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello
        </p>

        <Etherium />
        <Bitcoin />
        <Ripple />
        <EOS />
        <CCXT />
        <Zenbot />

      </div>
    );
  }
}

export default App;
