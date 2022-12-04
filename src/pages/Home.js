import React from 'react';
import hero from '../assets/hero.jpg';
import '../styles/Home.css';

export default function Home() {
  return (
    <section class="hero_section">
            <div class="hero_content">
                <h1>Building Better Websites</h1>
                <h2>Have your website designed and developed today!</h2>
                <a href="#contactMe" ><button>Contact Me!</button></a>
            </div>
            <img class="hero_img" src={hero} alt="Hero Image of a laptop with a small succulent in a white vase and a pink apple smart phone resting on the laptop." />
        </section> 
    );
}
