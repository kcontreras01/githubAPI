import React, { Component } from 'react';
import logo from './logo.svg';
import Etherium from './components/currency/Etherium';
import Bitcoin from './components/currency/Bitcoin';
import Ripple from './components/currency/Ripple';
import EOS from './components/currency/EOS';
import CCXT from './components/currency/ccxt';
import Zenbot from './components/currency/Zenbot';
import './App.css';
import axios from 'axios';
import SingleCard from './components/SingleCard';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      urls: [
        'https://api.github.com/repos/ethereum/go-ethereum', 
        'https://api.github.com/repos/bitcoin/bitcoin',
        'https://api.github.com/repos/ccxt/ccxt'
        ],
      cards: []
      
    }

    // this.showCard = this.showCard.bind(this);

  }

  componentWillMount() {
    let urls = this.state.urls
    urls.forEach((e) => {
       axios.get(e, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })
    .then(res => {
      this.setState(prevState => ({
        cards: [...prevState.cards, res.data],
      }))
    })
    .catch(e => {
      console.log('error', e);        
    })
    })
  }

  // showCard() {
  //     const cards = this.state.cards;
  //     // console.log('the cards are: ', cards);
  //     cards.forEach((e) => {
  //     return (
  //       <div>
  //         <div className="card-header">
  //           <h1 className="card-title text-capitalize text-sm-left">{cards.name}</h1>
  //         </div>
  //         <div className="card-body">
  //           <p className="card-text text-capitalize text-sm-left">{e.description}</p>
  //           <p className="text-sm-left">{e.language}</p>
  //           <p className="text-sm-left">Open Issues: {e.open_issues}</p>
  //           <p className="text-sm-left">Forks: {e.forks}</p>
  //           <a href={e.homepage} target="_blank" className="btn btn-primary">Homepage</a>
  //         </div>
  //       </div>        
  //       )
  //     })
  //   }

  render() {
    return (
        <div className="container">
          <div className="row">
          <SingleCard dataResults={this.state.cards} />
          
        </div>
        </div>
      )
  }
}

export default App;
