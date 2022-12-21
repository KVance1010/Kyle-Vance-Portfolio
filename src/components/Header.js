import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Header({ currentPage, handlePageChange }){
return (
    <header className="header">
        <Link to={'/'} className="logo_container" onClick={() => handlePageChange('Home')}>Kyle Vance</Link>
        <Nav currentPage={currentPage} handlePageChange = {handlePageChange}/>
    </header>
)
}

export default Header;