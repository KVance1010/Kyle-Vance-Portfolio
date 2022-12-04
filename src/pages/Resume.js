import React from 'react';
import '../styles/Resume.css';
import resume from '../assets/Kyle_Vance.pdf';

export default function Resume() {
	return (
		<div className="resume_container">
			<div className="skill_set">
				<h3>Technical Proficiencies</h3>
				<div className="skill_list">
					<ul>
						<li className="skill_li">
							♦ <abbr title="MongoDb Express React Node">MERN</abbr>/
							<abbr title="MongoDb Express Angular Node">MEAN</abbr> Development
						</li>
						<li className="skill_li">
							♦ Java / Java <abbr title="Enterprise Edition">EE</abbr>{' '}
							programming
						</li>
						<li className="skill_li">
							♦ Project Planning & Development{' '}
							<abbr title="Software Development and Operations">(DevOps)</abbr>
						</li>
						<li className="skill_li">♦ Full Stack Development</li>
					</ul>
					<ul>
						<li className="skill_li">
							♦ <abbr title="User Experience/ User Interface">UX/UI</abbr>
						</li>
						<li className="skill_li">♦ Clean Coding</li>
						<li className="skill_li">♦ Agile / Scrum Development</li>
						<li className="skill_li">♦ Testing & Troubleshooting</li>
					</ul>
					<ul>
						<li className="skill_li">♦ Database Development</li>
						<li className="skill_li">♦ Multi-threaded Programs</li>
						<li className="skill_li">♦ Performance optimization</li>
						<li className="skill_li">♦ Team Management and Collaboration</li>
					</ul>
				</div>
			</div>

			<div className="technologies_container">
				<h3>Skill Set</h3>
				<ul>
					<li className="technologies_li">
						<span className="technologies">FrontEnd:</span><span>  React, HTML, CSS,
						JavaScript, Graphql, Thymeleaf,{' '}
						<abbr title="Simple Object Access Protocol">SOAP</abbr> ,{' '}
						<abbr title="Representational State Transfer">REST</abbr>, Fetch,
						JQuery</span> 
					</li>
					<li className="technologies_li">
						<span className="technologies">BackEnd: </span><span> Express, Node, Apachi
						Tomcat, Spring Boot, Spring framework, Java, Hibernate, Sequelize,
						Mongoose, <abbr title="Java Persistence API">JPA</abbr>, Maven,
						Axios</span>
					</li>
					<li className="technologies_li">
						<span className="technologies"> Databases:</span><span> SQL, MySQL, MongoDB</span>
					</li>
					<li className="technologies_li">
						<span className="technologies">Tools:</span><span> GitHub, Git, Figma, VS
						Code, Eclipse</span>
					</li>
				</ul>
			</div>
			<div className="download_Link">
				<a className="download_aTag" href={resume} download>
					Download Resume
				</a>
			</div>
		</div>
	);
}
