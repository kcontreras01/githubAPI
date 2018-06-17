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
import axios from 'axios';
import SingleCard from './components/SingleCard';

class App extends Component {
    render() {
      return (
      <div className="App">
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
