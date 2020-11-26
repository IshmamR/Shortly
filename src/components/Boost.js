import React, { Component } from 'react';
import '../styles/Boost.css';
import BgBoost from '../images/bg-boost-desktop.svg';

class Boost extends Component {
	render() {
		return (
			<div className="Boost">
				<img src={BgBoost} alt="..." />
				<div className="boost-text">
					<h1>Boost your links today</h1>
					<button>Get Started</button>
				</div>
			</div>
		)
	}
}

export default Boost;