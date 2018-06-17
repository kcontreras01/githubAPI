import React, { Component } from 'react';
// import Etherium from './components/currency/Etherium';
// import Bitcoin from './components/currency/Bitcoin';
// import Ripple from './components/currency/Ripple';
// import EOS from './components/currency/EOS';
// import CCXT from './components/currency/ccxt';
// import Zenbot from './components/currency/Zenbot';
import './App.css';
import axios from 'axios';
import SingleCard from './components/SingleCard';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      urls: 
        [
          'https://api.github.com/repos/ethereum/go-ethereum', 
          'https://api.github.com/repos/bitcoin/bitcoin',
          'https://api.github.com/repos/ccxt/ccxt',
          'https://api.github.com/repos/EOSIO/eos',
          'https://api.github.com/repos/ripple/rippled',
          'https://api.github.com/repos/DeviaVir/zenbot'
        ],
      cards: []
      
    }

    this.showCard = this.showCard.bind(this);

  }

  componentDidMount() {
    let urls = this.state.urls;
    let cardArr = [];

    axios
      .all([axios.get(urls[0]), axios.get(urls[1]), axios.get(urls[2]), axios.get(urls[3]), axios.get(urls[4]), axios.get(urls[5]) ])
      .then(
        axios.spread(function(res0, res1, res2, res3, res4, res5) {
          cardArr.push(res0.data, res1.data, res2.data, res3.data, res4.data, res5.data);
        })
      ),
      this.setState({cards: cardArr})
  }

  showCard() {
      const cards = this.state.cards;
      console.log('the cards are: ', cards);
      cards.forEach((e) => {
      return (
        <div  key={e.id}>
          <div className="card-header">
            <h1 className="card-title text-capitalize text-sm-left">{cards.name}</h1>
          </div>
          <div className="card-body">
            <p className="card-text text-capitalize text-sm-left">{e.description}</p>
            <p className="text-sm-left">{e.language}</p>
            <p className="text-sm-left">Open Issues: {e.open_issues}</p>
            <p className="text-sm-left">Forks: {e.forks}</p>
            <a href={e.homepage} target="_blank" className="btn btn-primary">Homepage</a>
          </div>
        </div>        
        )
      })
    }

  render() {
      const cards = this.state.cards[0];
console.log(cards);
    return (
        <div className="container">
         <div>
          <div className="card-header">
            <h1 className="card-title text-capitalize text-sm-left">{cards.name}</h1>
          </div>
          <div className="card-body">
            <p className="card-text text-capitalize text-sm-left">{cards.description}</p>
            <p className="text-sm-left">{cards.language}</p>
            <p className="text-sm-left">Open Issues: {cards.open_issues}</p>
            <p className="text-sm-left">Forks: {cards.forks}</p>
            <a href={cards.homepage} target="_blank" className="btn btn-primary">Homepage</a>
          </div>
        </div>       
        </div>
      )
  }
}

export default App;
