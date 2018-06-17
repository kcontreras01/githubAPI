import React, { Component } from 'react';
import axios from 'axios';
import SingleCard from './SingleCard';

class Zenbot extends Component {
	constructor(props) {
		super(props);
			this.state = {
				cards: []
			}
	}

	componentDidMount() {
		axios.get('https://api.github.com/repos/DeviaVir/zenbot', {
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

	render() {
		return (
				<div className="allCards">
					<SingleCard dataResults={this.state.cards}/>
				</div>
			)
	}
}

export default Zenbot;