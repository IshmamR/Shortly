import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Shortener from './components/Shortener';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Hero />
				<Shortener />
				<Statistics />
				<Boost />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
