import React from 'react';
import wbsData from '../data/wbs.json';
import TaskList from './TaskList.tsx';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelected } from '../context/SelectedContext';

interface WBSListProps {
  projectId: number;
}

const WBSList: React.FC<WBSListProps> = ({ projectId }) => {
  const wbsList = wbsData.filter(wbs => wbs.projectId === projectId);
  const { selectedItem, setSelectedItem, isBackgroundGrey } = useSelected();

  const handleSelect = (id: number) => {
    setSelectedItem({ type: 'wbs', id });
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      {wbsList.map(wbs => (
        <details key={wbs.id} open>
          <summary
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(wbs.id);
            }}
            className={`selectable-item ${selectedItem.type === 'wbs' && selectedItem.id === wbs.id ? 'selected' : ''} ${isBackgroundGrey && selectedItem.type === 'wbs' && selectedItem.id === wbs.id ? 'background-grey' : ''}`}
          >
            <IoIosArrowForward className="arrow-icon"/>
            {wbs.name}
          </summary>
          <TaskList wbsId={wbs.id} />
        </details>
      ))}
    </div>
  );
};

export default WBSList;
