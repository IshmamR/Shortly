import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavNotRes.css';
import Logo from '../images/logo.svg';

class NavNotRes extends Component {
	render() {
		const handleResp = this.props.handleResp;
		
		return (
			<div className="NavNotRes">
				<div className="nav-1">
					<Link to="/"><img src={Logo} alt="..." /></Link>
					<div className="links-1">
						<Link to="/"><span>Features</span></Link>
						<Link to="/"><span>Pricing</span></Link>
						<Link to="/"><span>Resources</span></Link>
					</div>
				</div>
					
				<div className="nav-2">
					<div className="links-2">
						<Link to="/"><span>Login</span></Link>
						<Link to="/"><span className="signup">Sign Up</span></Link>
					</div>

					<div onClick={() => {handleResp()}} className="menu">
						=
					</div>
				</div>
			</div>
		)
	}
}

export default NavNotRes;