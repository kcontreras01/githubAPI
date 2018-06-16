import React, {Component} from 'react';
import axios from 'axios';

class SingleCard extends Component {
	constructor(props) {
		super(props);
	
	this.renderCards = this.renderCards.bind(this);
	}

	renderCards() {
		const cards = this.props.dataResults;
		return (
				<div>
						<p>{cards.name}</p>
						<p>{cards.description}</p>
						<p>{cards.language}</p>
						<p>{cards.open_issues}</p>
						<p>{cards.forks}</p>
						<a href={cards.homepage} target="_blank">Homepage</a>
				</div>
			)
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