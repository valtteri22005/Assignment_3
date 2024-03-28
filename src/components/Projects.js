import React from 'react';

const Projects = () => {
  // Example project data
  const projects = [
    {
      id: 1,
      name: 'Awesome Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      name: 'Amazing Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://example.com/project2',
    },
    // You can add more project entries here
  ];

  return (
    <div className="projects container mt-5">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
