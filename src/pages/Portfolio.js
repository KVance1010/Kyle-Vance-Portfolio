import React from 'react';
import '../styles/Portfolio.css';
import game from '../assets/Game-Homepage.gif';
import travel from '../assets/OuiTravel.gif';
import js from '../assets/JavaScripts_Quiz_Game.gif';
import weather from '../assets/Weather_Dashboard.gif';
import note from '../assets/Note_Taker.gif';
import tech from '../assets/Tech-Blog.gif';
import Project from '../components/Project';

const projects = [
	{
		id: 1,
		image: game,
		altText: 'display of the website and how to use it',
		title: '4Play Gaming',
		description: '4Play is fullstack web application for users that has a passion for video games. The website allows the user to create an account, check game information, create comments about the games and also, search games by game name, genres and category. Once the user select a game and click on it, we redirect the user to a page, where he will have access for more information and gallery displaying the some screenshots of the game.',
		technology: ' MySQL, CSS, bcrypt, Session-Sequelize, JavaScript, Handlebars, Node.js, GitHub, Sequelize, Express, Heroku',
		liveLink: 'https://fp-4play.herokuapp.com/0',
		gitLink: 'https://github.com/KVance1010/Gameproject',
	},
	{
		id: 2,
		image: tech,
		altText: '',
		title: 'Tech-Blog',
		description: 'Tech-Blog is a fullstack web application that allows programmers to create post and comments. This web site allows the user to use CRUD operations on the data and stores the information to a database',
		technology: 'MySQL,	CSS, bcrypt, Session-Sequelize,	JavaScript, Handlebars,	Node.js, GitHub, Sequelize,	Express, Heroku',
		liveLink: 'https://tech-blog-101.herokuapp.com',
		gitLink: 'https://github.com/KVance1010/Tech-Blog',
	},
	{
		id: 3,
		image: travel,
		altText: '',
		title: 'OuiTravel',
		description: 'OuiTravel serves as a travel guide for users. It provides many common research points such as currency conversion and common phrases. We use HTML, CSS, and Javascript in our source code. The webpage utilizes various APIs that extract data from online. In our program, we manipulate the data to showcase a clean and easy to read display for the user with only relevant information.',
		technology: ' HTML, CSS, JavaScript, APIs, GitHub',
		liveLink: 'https://kvance1010.github.io/travel-application/',
		gitLink: 'https://github.com/KVance1010/travel-application',
	},
	{
		id: 4,
		image: js,
		altText: '',
		title: 'JavaScript Quiz Game',
		description: 'JavaScript Quiz Game is designed to help users practice for an interview through a javascript quiz game.',
		technology: ' JavaScript, CSS, HTML, GitHub',
		liveLink: 'https://kvance1010.github.io/Quiz-Game/',
		gitLink: 'https://github.com/KVance1010/Quiz-Game',
	},
	{
		id: 5,
		image: weather,
		altText: '',
		title: 'Weather Dashboard',
		description: 'Weather Dashboard is an application that shows the current weather and a five day forecast for the chosen city.',
		technology: ' Fetch, JavaScript, HTML, CSS',
		liveLink: 'https://kvance1010.github.io/weather-app/',
		gitLink: 'https://github.com/KVance1010/weather-app',
	},
	{
		id: 6,
		image: note,
		altText: '',
		title: 'Note Taker',
		description: 'Note Taker is a simple note taking application that saves the users notes to a file. This application will allow the user to create update and delete their notes. This application uses a Json file to save the notes.',
		technology: 'Express, Json,	Heroku,	JavaScript,	HTML, CSS, Github',
		liveLink: 'https://note-taker-ksv.herokuapp.com/notes',
		gitLink: 'https://github.com/KVance1010/note-taker-node',
	},
	
];

export default function Portfolio() {
	return (
		<section className = "portfolio">
			<h2>My Portfolio</h2>
			<Project projects={projects} />
		</section>
	);
}
