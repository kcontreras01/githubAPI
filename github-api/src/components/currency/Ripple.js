import React, { Component } from 'react';
import axios from 'axios';
import SingleCard from '../SingleCard';

class Ripple extends Component {
	constructor(props) {
		super(props);
			this.state = {
				cards: [],
				avatar: []
			}
	}

	componentDidMount() {
		axios.get('https://api.github.com/repos/ripple/rippled', {
			headers: {
				Accept: 'application/vnd.github.v3+json'
			}
		})
		.then(res => {
			console.log(res)
			this.setState({
				cards: res.data,
				avatar: res.data.owner.avatar_url
			}), console.log(this.state)
		})
		.catch(e => {
      console.log('error', e);        
    })
	}

	render() {
		return (
				<div className="col">
					<SingleCard dataResults={this.state}/>
				</div>
			)
	}
}

export default Ripple;