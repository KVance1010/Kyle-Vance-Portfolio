import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ currentPage, handlePageChange }) {
	const [dropDown, setDropdown] = useState(false);
	const [activeState, setActiveState] = useState('');
	const handleDropDown = () => {
		setDropdown((dropDown) => !dropDown);
		if (activeState === 'active') {
			setActiveState('');
		} else {
			setActiveState('active');
		}
	};

	return (
		<header className="header">
			<Link
				to={'/'}
				className="logo_container"
				onClick={() => handlePageChange('Home')}
			>
				Kyle Vance
			</Link>
			<nav>
				<ul className="nav_list">
					<NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
				</ul>
				<div className={`hamburger ${activeState}`} onClick={handleDropDown}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
					{dropDown ?(
							<ul className="navbar_nav2">
								<NavLinks
									currentPage={currentPage}
									handlePageChange={handlePageChange}
								/>
							</ul>
						):(<span></span>)}
				</div>
			</nav>
		</header>
	);
}

export default Header;
