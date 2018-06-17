import React, {Component} from 'react';

class SingleCard extends Component {
	constructor(props) {
		super(props);

		this.showCard = this.showCard.bind(this);
		}

		showCard() {
			const cards = this.props.dataResults.cards;
			const avatar = this.props.dataResults.avatar;
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
						<img src={avatar} alt="avatar_url" className="h-25 w-25 p-2"/>
						<a href={cards.homepage} target="_blank" className="btn btn-primary p-2 w-50">Homepage</a>
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