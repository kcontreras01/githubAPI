import React, { Component } from 'react';
import axios from 'axios';
import SingleCard from './SingleCard';

class CCXT extends Component {
	constructor(props) {
		super(props);
			this.state = {
				cards: []
			}

		this.showAllCards = this.showAllCards.bind(this);

	}


 // "https://api.github.com/search/repositories?q=cryptocurrency&sort=stars&order=desc"
	componentDidMount() {
		axios.get('https://api.github.com/repos/ccxt/ccxt', {
			headers: {
				Accept: 'application/vnd.github.v3+json'
			}
		})
		.then(res => {
			this.setState({
				cards: res.data,
			})
		})
		.catch(e => {
      console.log('error', e);        
    })
	}

	showAllCards() {
		const cardInfo = this.state.cards;
		return (
				<div>
						<p>{cardInfo.name}</p>
						<p>{cardInfo.description}</p>
						<p>{cardInfo.language}</p>
						<p>{cardInfo.open_issues}</p>
						<p>{cardInfo.forks}</p>
						<a href={cardInfo.homepage} target="_blank">Homepage</a>
				</div>
			)
	}

	render() {
			console.log(this.state.cards);

		return (
				<div className="allCards">
					{this.showAllCards()}
				</div>
			)
	}
}

export default CCXT;