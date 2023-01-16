import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home({ currentPage, handlePageChange }) {
	return (
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
		</section>
	);
}
