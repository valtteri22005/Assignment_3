import React from 'react';

const WorkExperience = () => {
  // Example work experience data
  const workExperiences = [
    {
      id: 1,
      company: 'Acme Corporation',
      position: 'Senior Cartoon Engineer',
      duration: '2010 - Present',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis interdum erat vestibulum vulputate. Fusce mattis augue a felis feugiat commodo. Suspendisse potenti.',
    },
    {
      id: 2,
      company: 'Looney Tunes Studios',
      position: 'Lead Anvil Designer',
      duration: '2005 - 2010',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis interdum erat vestibulum vulputate.',
    },
    // You can add more work experience entries here
  ];

  return (
    <div className="work-experience container mt-5">
      <h2 className="mb-4">Work Experience</h2>
      <div className="row">
        {workExperiences.map((experience) => (
          <div className="col-md-6 col-lg-4 mb-4" key={experience.id}>
            <div className="card h-100 shadow">
              <div className="card-header">
                <h5 className="card-title mb-0">{experience.company}</h5>
              </div>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                  {experience.position}
                </h6>
                <p className="card-text">{experience.description}</p>
              </div>
              <div className="card-footer text-muted">
                <small>{experience.duration}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
