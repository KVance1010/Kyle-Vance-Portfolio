import React from 'react';
import Nav from './Nav';

function Header({ currentPage, handlePageChange }){
return (
    <header className="header">
        <p className="">Kyle Vance</p>
        <Nav currentPage={currentPage} handlePageChange = {handlePageChange}/>
    </header>
)
}

export default Header;