import React from 'react';

export default function Projects({projects}) {
	return (
		<div className= "project_group_portfolio">
			{ projects.map((project) => (
				<div className="projects" key={project.id}>
					<img src={project.image} alt={project.altText} />
					<div class="project_box">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<p>{project.technology}</p>
					</div>
				</div>
			))}
		</div>
	);
}
