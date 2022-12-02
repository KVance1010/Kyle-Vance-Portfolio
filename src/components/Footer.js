import React from 'react'

const Footer = ({setCurrentPage}) => {
    function handleClick(event){
        console.log(event.target.textContent);
        setCurrentPage(event.target.textContent); 
    }

  return (
    <footer>
        <ul>
            <li onClick={handleClick}>gitHub</li>
            <li onClick={handleClick}>LinkedIn</li>
            <li onClick={handleClick}>social media</li>
        </ul>
    </footer>
  )
}

export default Footer