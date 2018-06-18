import React, { Component } from 'react';
import Etherium from './components/currency/Etherium';
import Bitcoin from './components/currency/Bitcoin';
import Ripple from './components/currency/Ripple';
import EOS from './components/currency/EOS';
import BitcoinCash from './components/currency/BitcoinCash';
import Litecoin from './components/currency/Litecoin';

class App extends Component {
    render() {
      return (
        <div className="container">
          <div className="row">
            <Etherium />
            <Bitcoin />
            <Ripple />
          </div>
          <div className="row">
            <EOS />
            <BitcoinCash />
            <Litecoin />
          </div>
        </div>
    );
  }
}


export default App;
