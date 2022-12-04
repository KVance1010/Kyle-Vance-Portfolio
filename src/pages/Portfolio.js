import React from 'react';
import '../styles/Portfolio.css';
import calc from '../assets/calc.jpg';
import eCom from '../assets/ecom.jpg';
import school from '../assets/school.jpg';
import ticTac from '../assets/tic-tac.jpg';
import Project from '../components/Project';

const projects = [
	{
		id: 1,
		image: calc,
		altText: 'a calculator on a dest with a notepad under it',
		description: 'a calculator on a dest with a',
		technology: 'Spring Java Thymeleaf MySQL',
		link: '',
	},
	{
		id: 2,
		image: eCom,
		altText: 'picture of a shop glass door with an open sign displayed',
		description: 'a ',
		technology: 'Spring Java Thymeleaf MySQL',
		link: '',
	},
	{
		id: 3,
		image: school,
		altText: 'classroom with a bunch of old desks',
		description: 'a ',
		technology: 'Java',
		link: '',
	},
	{
		id: 4,
		image: ticTac,
		altText: 'hand with X O black cutouts on it',
		description: 'hand ',
		technology: 'Java',
		link: '',
	},
	{
		id: 5,
		image: ticTac,
		altText: 'hand with X O black cutouts on it',
		description: 'hand ',
		technology: 'Java',
		link: '',
	},
	{
		id: 6,
		image: ticTac,
		altText: 'hand with X O black cutouts on it',
		description: 'hand ',
		technology: 'Java',
		link: '',
	},
];

export default function Portfolio() {
	return (
		<section>
			<h2>My Portfolio</h2>
			<Project projects={projects} />
		</section>
	);
}
