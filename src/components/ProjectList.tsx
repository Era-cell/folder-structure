import React from 'react';
import projects from '../data/project.json';
import ProjectItem from './ProjectItem';

const ProjectList: React.FC = () => {
  return (
    <div>
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
