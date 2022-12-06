import React from 'react';

export default function Projects({ projects }) {
	return (
		<div className="project_group_portfolio">
			{projects.map((project) => (
				<div className="projects" key={project.id}>
					<img src={project.image} alt={project.altText} />
					<div className="project_box">
						<h3 className='proTitle'>{project.title}</h3>
					</div>
					<div className="overlay">
						<div className="overlayText">
							<p><span className="overlayTitle">Title: </span>{project.title}</p>
							<p><span className="overlayTitle">Description: </span>{project.description}</p>
							<p><span className="overlayTitle">Technologies: </span>{project.technology}</p>
							<div className="overlayLinks">
								<a className="overlayLink" href={project.liveLink} target="_blank">Live Link</a>
								<a  className="overlayLink" href={project.gitLink} target="_blank">GitHub Link</a>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
