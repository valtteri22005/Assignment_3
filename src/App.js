import React from 'react';
import PersonalInfo from './components/PersonalInfo.js';
import EducationalBackground from './components/EducationalBackground.js';
import Projects from './components/Projects.js';
import WorkExperience from './components/WorkExperience.js';

function App() {
  return (
    <div>
      <PersonalInfo />
      <EducationalBackground />
      <Projects />
      <WorkExperience />
    </div>
  );
}

export default App;
