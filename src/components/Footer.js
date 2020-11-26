import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Logo from '../images/logo.svg';
import FB from '../images/icon-facebook.svg';
import TT from '../images/icon-twitter.svg';
import IG from '../images/icon-instagram.svg';
import PT from '../images/icon-pinterest.svg';

class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<div className="footer-logo">
					<img src={Logo} alt="..." />
				</div>

				<div className="links">
					<div>
						<h4>Features</h4>
						<ul>
							<li><Link to="/">Link Shortening</Link></li>
							<li><Link to="/">Branded Links</Link></li>
							<li><Link to="/">Analytics</Link></li>
						</ul>
					</div>
					<div>
						<h4>Resource</h4>
						<ul>
							<li><Link to="/">Blog</Link></li>
							<li><Link to="/">Developers</Link></li>
							<li><Link to="/">Support</Link></li>
						</ul>
					</div>
					<div>
						<h4>Company</h4>
						<ul>
							<li><Link to="/">About</Link></li>
							<li><Link to="/">Our Team</Link></li>
							<li><Link to="/">Career</Link></li>
							<li><Link to="/">Contact</Link></li>
						</ul>
					</div>
				</div>

				<div className="social-links">
					<Link to="/"><img src={FB} alt="facebook" /></Link>
					<Link to="/"><img src={TT} alt="twitter" /></Link>
					<Link to="/"><img src={PT} alt="pinterest" /></Link>
					<Link to="/"><img src={IG} alt="instagram" /></Link>
				</div>
			</div>
		)
	}
}

export default Footer;