import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import hero from '../assets/mainBackground.jpg';
import MobileHero from '../assets/background.jpg';
// import About from './About';
// import Contact from './Contact';

export default function Home({ currentPage, handlePageChange }) {
	return (
		<>
		<section className="hero_section">
			<div className="hero_content">
				{/* <h1>Building Better Websites</h1>
				<h2>Have your website designed and developed today!</h2> */}
				<h1>Bringing Ideas To Light</h1>
				<h2> through better websites!</h2>
				<Link to="/contact" onClick={() => handlePageChange('Contact')}>
					<button>Contact Me!</button>
				</Link>
			</div>
			<img
				className="hero_img"
				src={hero}
				alt="Hero Image of a laptop with a small succulent in a white vase and a pink apple smart phone resting on the laptop."
			/>
			<img
				className="mobile_hero_img"
				src={MobileHero}
				alt="Hero Image of a laptop with a small succulent in a white vase and a pink apple smart phone resting on the laptop."
			/>
		</section>
		{/* <About /> */}
		{/* <Contact /> */}
		</>
	);
}
