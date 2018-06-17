import React, { Component } from 'react';
import Etherium from './components/currency/Etherium';
import Bitcoin from './components/currency/Bitcoin';
import Ripple from './components/currency/Ripple';
import EOS from './components/currency/EOS';
import CCXT from './components/currency/ccxt';
import Zenbot from './components/currency/Zenbot';
import Intro from './components/Intro';
import './App.css';

class App extends Component {
    render() {
      return (
      <div className="container">
      <Intro />
        <div className="row">
          <Etherium />
          <Bitcoin />
          <Ripple />
        </div>
        <div className="row">
          <EOS />
          <CCXT />
          <Zenbot />
        </div>
      </div>
    );
  }
}


export default App;
