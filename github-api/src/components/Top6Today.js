import React, { Component } from 'react';
import Etherium from './currency/Etherium';
import Bitcoin from './currency/Bitcoin';
import Ripple from './currency/Ripple';
import EOS from './currency/EOS';
import CCXT from './currency/ccxt';
import Zenbot from './currency/Zenbot';
import axios from 'axios';

class Top6Today extends Component {
	constructor(props) {
		super(props);
			this.state = {
				cards: []
			}
	}

	render() {
		return (
				<div className="container">
					<div className="row">
		        <Etherium />
		        <Bitcoin />
		        <Ripple />
	        </div>
	        <div className="row">
		        <EOS />
		        <CCXT />
		        <Zenbot />
		      </div>
        </div>
			)
	}
}

export default Top6Today;