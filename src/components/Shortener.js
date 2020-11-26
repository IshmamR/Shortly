import React, { useState, useEffect } from 'react';
import '../styles/Shortener.css';
import BG from '../images/bg-shorten-desktop.svg';

const Shortener = () => {
	const [url, setUrl] = useState('');
	const [urlF, setUrlF] = useState(null);
	const [shorts, setShorts] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async() => {
			if(url.trim() !== '') {
				fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
				.then(res => res.json())
				.then(data => {
					setShorts(data)
					// console.log(data);
					setLoading(false);
				});
			}
		};

		fetchData();
	}, [urlF])

	const handleUrl = (e) => {
		setUrl(e.target.value);
	}
	const handleSubmit = (e) => {
		setShorts(null);
		e.preventDefault();
		setLoading(true);
		setUrlF(url);
		// console.log(shorts);
	}

	const handleCopy = (e) => {
		e.target.previousSibling.select();
		document.execCommand("Copy");
		e.target.innerHTML = 'Copied';
	}

	return (
		<div className="Shortener">
			<div className="go-up">
				<div className="shortener-bg">
					<img src={BG} alt="..." />
					<div className="shortener-up">		
					<form onSubmit={handleSubmit}>
						<input required type="text" onChange={handleUrl} value={url} />
						<button type="submit">Shorten It!</button>
					</form>
					</div>
				</div>
			</div>

			{shorts?.ok? (
				<div className="short-urls">
					<div className="short-url">
						<input type="text" readOnly	
							value={shorts.result?.full_short_link} />
						<button className="copy" onClick={handleCopy}>Copy Link</button>
					</div>
					<div className="short-url">
						<input type="text" readOnly 
							value={shorts.result?.full_short_link2} />
						<button className="copy" onClick={handleCopy}>Copy Link</button>
					</div>
					<div className="short-url">
						<input type="text" readOnly 
							value={shorts.result?.full_short_link3} />
						<button className="copy" onClick={handleCopy}>Copy Link</button>
					</div>
				</div>
			) : (
			loading? (
				<div className="loader">
					{/* <img src={Loader} alt="Loading..." /> */}
					Loading...
				</div>
			) : ("")
			)}
		</div>
	)
}

export default Shortener;