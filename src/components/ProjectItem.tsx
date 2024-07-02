import React from 'react';
import WBSList from './WBSList.tsx';
import { Project } from '../types.tsx';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelected } from '../context/SelectedContext';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { selectedItem, setSelectedItem, isBackgroundGrey } = useSelected();

  const handleSelect = () => {
    setSelectedItem({ type: 'project', id: project.id });
  };

  return (
    <details open>
      <summary
        onClick={(e) => {
          e.stopPropagation();
          handleSelect();
        }}
        className={`selectable-item ${selectedItem.type === 'project' && selectedItem.id === project.id ? 'selected' : ''} ${isBackgroundGrey && selectedItem.type === 'project' && selectedItem.id === project.id ? 'background-grey' : ''}`}
      >
        <IoIosArrowForward className="arrow-icon"/>
        {project.name}
      </summary>
      <WBSList projectId={project.id} />
    </details>
  );
};

export default ProjectItem;
