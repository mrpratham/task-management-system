import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import './taskdisplay.css';

const TaskDisplay = ({ tasks, deleteTask }) => {
  return (
    <div className="taskDisplay">
      {tasks.length > 0 ? tasks.map(task => (
        <div key={task._id} className="taskItem">
          <div className="taskText">{task.text}</div>
          <div className="taskPriority">{task.priority}</div>
          <RiCloseCircleLine
            onClick={() => deleteTask(task._id)}
            className='deleteButton'
          />
        </div>
      )) : (
        <p style={{ color: "#7583c4" }}>No tasks added yet</p>
      )}
    </div>
  );
}

export default TaskDisplay;
