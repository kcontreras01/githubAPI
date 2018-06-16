import React, {Component} from 'react';
import axios from 'axios';

class SingleCard extends Component {
	constructor(props) {
		super(props);
			this.state = {
				cards: []
			}
	
	this.renderCards = this.renderCards.bind(this);
	
	}

	componentDidMount() {
		axios.get('https://api.github.com/search/repositories?q=cryptocurrency&sort=stars&order=desc', {
			headers: {
				Accept: 'application/vnd.github.v3+json'
			}
		})
		.then(res => {
			// console.log('the state is: ', this.state.cards);
			this.setState({
				cards: res.data.items,
			})
			console.log('the res is: ', this.state.cards)
		})
		.catch(e => {
      console.log('error', e);        
    })
	}

	renderCards() {
		console.log('the state is: ',this.props);
		// const cards = this.state.map(cards => {
		// return (
		// 		<div>
		// 				<p>{cards.name}</p>
		// 				<p>{cards.description}</p>
		// 				<p>{cards.language}</p>
		// 				<p>{cards.open_issues}</p>
		// 				<p>{cards.forks}</p>
		// 				<a href={cards.homepage} target="_blank">Homepage</a>
		// 		</div>
		// 	)
		// })
	}

	render() {
		return (
				<div className="allCards">
					{this.renderCards()}
				</div>
			)
	}

}




export default SingleCard;