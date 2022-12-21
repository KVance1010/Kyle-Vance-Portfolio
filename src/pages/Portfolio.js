import React from 'react';
import '../styles/Portfolio.css';
import game from '../assets/Game-Homepage.gif';
import travel from '../assets/OuiTravel.gif';
import js from '../assets/JavaScripts_Quiz_Game.gif';
import aa from '../assets/website-builder-demo.gif';
import note from '../assets/Note_Taker.gif';
import tech from '../assets/Tech-Blog.gif';
import Project from '../components/Project';

const projects = [
	{
		id: 1,
		image: game,
		altText: 'display of the website and how to use it',
		title: '4Play Gaming',
		description: '4Play is a full stack web application designed for users with a passion for video games. The website allows the user to create an account, check game information, create comments about games and search for games by game name, genres, and category.',
		technology: ' MySQL, CSS, bcrypt, Session-Sequelize, JavaScript, Handlebars, Node.js, GitHub, Sequelize, Express, Heroku',
		liveLink: 'https://fp-4play.herokuapp.com/0',
		gitLink: 'https://github.com/KVance1010/Gameproject',
	},
	{
		id: 2,
		image: tech,
		altText: '',
		title: 'Tech-Blog',
		description: 'This is a full stack web application that allows programmers to create posts and comments about . Users can use CRUD operations on data that is stored on a database.',
		technology: 'MySQL,	CSS, bcrypt, Session-Sequelize,	JavaScript, Handlebars,	Node.js, GitHub, Sequelize,	Express, Heroku',
		liveLink: 'https://tech-blog-101.herokuapp.com',
		gitLink: 'https://github.com/KVance1010/Tech-Blog',
	},
	{
		id: 3,
		image: aa,
		altText: '',
		title: 'Aspiration Architects',
		description: 'Aspiration Architects is a full stack web application that is designed to help users build their own websites. This website allows users to create an HTML website that has CSS built inline.',
		technology: ' JavaScript, CSS, Bcrypt, Mongoose, GitHub, React, Node, Sessions, Express, Figma, Heroku, SweetAlert, MongoDB, React DnD, File-Saver, Bootstrap',
		liveLink: 'https://aspiration-architects.herokuapp.com/',
		gitLink: 'https://github.com/KVance1010/website-builder',
	},
	{
		id: 4,
		image: travel,
		altText: '',
		title: 'OuiTravel',
		description: 'OuiTravel serves as a travel guide for users. It provides many common research points such as currency conversion and common phrases. The webpage utilizes various APIs to aid the user in all of their travel needs.',
		technology: ' HTML, CSS, JavaScript, APIs, GitHub',
		liveLink: 'https://kvance1010.github.io/travel-application/',
		gitLink: 'https://github.com/KVance1010/travel-application',
	},
	{
		id: 5,
		image: js,
		altText: '',
		title: 'JavaScript Quiz Game',
		description: 'JavaScript Quiz Game is designed to help users practice for an interview through a javascript quiz game.',
		technology: ' JavaScript, CSS, HTML, GitHub',
		liveLink: 'https://kvance1010.github.io/Quiz-Game/',
		gitLink: 'https://github.com/KVance1010/Quiz-Game',
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
