import React, { Component } from 'react';
import axios from 'axios';

class ShowCards extends Component {
	constructor(props) {
		super(props);
		this.showAllCards = this.showAllCards.bind(this);
		
		this.state = {
			cards: []
		}
	}

	componentDidMount() {
		axios.get('https://api.github.com/repos/ethereum/go-ethereum', {
			headers: {
				Accept: 'application/vnd.github.v3+json'
			}
		})
		.then(res => {
			// console.log('the state is: ', this.state.cards);
			this.setState({
				cards: res.data,
			})
			// console.log('the res is: ', res.data)
		})
		.catch(e => {
      console.log('error', e);        
    })
	}

	showAllCards() {
		console.log(this.state.cards);
		const cardInfo = this.state;
		console.log(cardInfo);
		return (
				<div>
					<li>
						{cardInfo.cards.name}
					</li>
				</div>
			)
	}

	render() {
		return (
				<div className="allCards">
					{this.showAllCards()}
				</div>
			)
	}
}

export default ShowCards;