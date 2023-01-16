import React from 'react';
import hero from '../assets/hero.jpg';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home({ currentPage, handlePageChange }) {
	return (
		<section className="hero_section">
			<div className="hero_content">
				<h1>Building Better Websites</h1>
				<h2>Have your website designed and developed today!</h2>
				<Link
					to="/contact"
					onClick={() => handlePageChange('Contact')}
				>
					<button>Contact Me!</button>
				</Link>
			</div>
			<img
				className="hero_img"
				src={hero}
				alt="Hero Image of a laptop with a small succulent in a white vase and a pink apple smart phone resting on the laptop."
			/>
		</section>
	);
}
