import React, { Component } from 'react';
import '../styles/Hero.css';
import Working from '../images/illustration-working.svg';

class Hero extends Component {
	render() {
		return (
			<div className="Hero">
				<div className="hero-img">
					<img src={Working} alt="..." />
				</div>

				<div className="hero-text">
					<h1>More than just shorter links</h1>
					<p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
					<button>Get Started</button>
				</div>
			</div>
		)
	}
}

export default Hero;