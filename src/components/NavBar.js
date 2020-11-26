import React, { useState } from 'react';
import '../styles/NavBar.css';
import NavNotRes from './NavNotRes';
import NavRes from './NavRes';

const NavBar = () => {
	const [resp, setResp] = useState(false);
	
	const handleResp = () => {
		setResp(!resp);
		console.log(resp);
	}
	return (
		<div className="NavBar">
			<NavNotRes resp={resp} handleResp={handleResp} />
			{resp ? (
				<NavRes />
			) : (
				""
			)}
		</div>
	)
}

export default NavBar;