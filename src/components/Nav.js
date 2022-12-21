import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ currentPage, handlePageChange }) {
	return (
		<nav>
			<ul className="nav_list">
				<li className="nav_item">
					<Link
						to="/about"
						onClick={() => handlePageChange('About')}
						className={currentPage === 'About' ? 'nav_link active' : 'nav_link'}
					>
						About
					</Link>
				</li>
				<li className="nav_item">
					<Link
						to="/projects"
						onClick={() => handlePageChange('Projects')}
						className={
							currentPage === 'Projects' ? 'nav_link active' : 'nav_link'
						}
					>
						Projects
					</Link>
				</li>
				<li className="nav_item">
					<Link
						to="/resume"
						onClick={() => handlePageChange('Resume')}
						className={
							currentPage === 'Resume' ? 'nav_link active' : 'nav_link'
						}
					>
						Resume
					</Link>
				</li>
				<li className="nav_item">
					<Link
						to="/contact"
						onClick={() => handlePageChange('Contact')}
						className={
							currentPage === 'Contact' ? 'nav_link active' : 'nav_link'
						}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
