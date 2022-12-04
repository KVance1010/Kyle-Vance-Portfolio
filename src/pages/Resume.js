import React from 'react';
import '../styles/Resume.css';
import resume from '../assets/Kyle_Vance.pdf';

export default function Resume() {
	return (
		<div>
			<h2>Technical Proficiencies</h2>
			<div className="skill_set">
				<ul>
					<li>♦ MERN/MEAN Development</li>
					<li>♦ Java / Java EE programming</li>
					<li>♦ Project Planning & Development</li>
					<li>♦ Full Stack Development</li>
				</ul>
				<ul>
					<li>♦ Clean Coding</li>
					<li>♦ Agile / Scrum Development</li>
					<li>♦ DevOps Management</li>
					<li>♦ Testing & Troubleshooting</li>
				</ul>
				<ul>
					<li>♦ Database Development</li>
					<li>♦ Multi-threaded Programs</li>
					<li>♦ Performance optimization</li>
					<li>♦ Team Management and Collaboration</li>
				</ul>
			</div>
			<div>
				<h2>Resume</h2>
				<a href={resume} download>
					Download Resume
				</a>
			</div>
		</div>
	);
}
