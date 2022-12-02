import React from 'react';
import Nav from '../Nav';

function Header(props){
    console.log(props);
return (
    <header className="header">
        <p className="">Kyle Vance</p>
        <Nav setCurrentPage = {props.setCurrentPage}/>
    </header>
)
}

export default Header;