import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavRes.css';

class NavRes extends Component {
	render() {
		return (
			<div className="NavRes">
				<Link to="/">Feature</Link>
				<Link to="/">Pricing</Link>
				<Link to="/">Resources</Link>
				<hr />
				<Link to="/">Login</Link>
				<Link className="sign-up" to="/">Sign Up</Link>
			</div>
		)
	}
}

export default NavRes;