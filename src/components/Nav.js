import React from 'react';

function Nav({ currentPage, handlePageChange }) {
	return (
		<nav>
			<ul className="nav_list">
				<li className="nav_item">
					<a
						href="#about"
						onClick={() => handlePageChange('About')}
						className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
					>
						About Me
					</a>
				</li>
				<li className="nav_item">
					<a
						href="#projects"
						onClick={() => handlePageChange('Projects')}
						className={
							currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
						}
					>
						Projects
					</a>
				</li>
				<li className="nav_item">
					<a
						href="#resume"
						onClick={() => handlePageChange('Resume')}
						className={
							currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
						}
					>
						Resume
					</a>
				</li>
				<li className="nav_item">
					<a
						href="#contact"
						onClick={() => handlePageChange('Contact')}
						className={
							currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
						}
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
