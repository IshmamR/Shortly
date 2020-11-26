import React, { Component } from 'react';
import '../styles/Statistics.css';
import BrandIcon from '../images/icon-brand-recognition.svg';
import DetailIcon from '../images/icon-detailed-records.svg';
import FulCustIcon from '../images/icon-fully-customizable.svg';

class Statistics extends Component {
	render() {
		return (
			<div className="Statistics">
				<h1>Advanced Statistics</h1>
				<p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
				
				<div className="flexer">
					
					<div className="br">
						<div className="icon">
							<img src={BrandIcon} alt="..." />
						</div>
						<div className="icon-text">
							<h2>Brand recognition</h2>
							<p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
						</div>
					</div>

					<div className="dt">
						<div className="icon">
							<img src={DetailIcon} alt="..." />
						</div>
						<div className="icon-text">
							<h2>Detailed Records</h2>
							<p>Get insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
						</div>
					</div>

					<div className="fc">
						<div className="icon">
							<img src={FulCustIcon} alt="..." />
						</div>
						<div className="icon-text">
							<h2>Fully Customizable</h2>
							<p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Statistics;