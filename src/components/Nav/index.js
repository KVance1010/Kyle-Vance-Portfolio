import React from 'react'

const Nav = ({setCurrentPage}) => {
    function handleClick(event){
   
        console.log(event.target.textContent);
        setCurrentPage(event.target.textContent); 
    }

  return (
    <nav>
        <ul>
            <li onClick={handleClick}>About</li>
            <li onClick={handleClick}>Contact</li>
            <li onClick={(e)=>{handleClick(e)}}>Resume</li>
        </ul>
    </nav>
  )
}

export default Nav