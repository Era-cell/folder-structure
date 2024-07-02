import React from 'react';
import taskData from '../data/task.json';
import { useSelected } from '../context/SelectedContext';

interface TaskListProps {
  wbsId: number;
}

const TaskList: React.FC<TaskListProps> = ({ wbsId }) => {
  const tasks = taskData.filter(task => task.wbsId === wbsId);
  const { selectedItem, setSelectedItem, isBackgroundGrey } = useSelected();

  return (
    <div style={{ marginLeft: '40px' }}>
      {tasks.map(task => (
        <div
          key={task.id}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedItem({ type: 'task', id: task.id });
          }}
          className={`task-item ${selectedItem.type === 'task' && selectedItem.id === task.id ? 'selected' : ''} ${isBackgroundGrey && selectedItem.type === 'task' && selectedItem.id === task.id ? 'background-grey' : ''}`}
        >
          {task.name}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
