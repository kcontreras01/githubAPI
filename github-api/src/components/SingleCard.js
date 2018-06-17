import React, {Component} from 'react';
import axios from 'axios';

class SingleCard extends Component {
	constructor(props) {
		super(props);

		this.showCard = this.showCard.bind(this);
		}

		showCard() {
			const cards = this.props.dataResults;
			return (
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
				)
		}

	render() {
		return (
			<div  className="card bg-light mb-3 border-light h-100">
			{this.showCard()}
		</div>
		)
	}

}


export default SingleCard;