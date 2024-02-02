import React, { useState, useEffect } from 'react';
import './Overview.css'; // Import your CSS file

const api = 'http://localhost:3001';

function Overview() {
  const [tasks, setTasks] = useState({ high: [], medium: [], low: [] });

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    fetch(api + '/tasks')
      .then(res => res.json())
      .then(data => {
        const highPriority = data.filter(task => task.priority === 'high');
        const mediumPriority = data.filter(task => task.priority === 'medium');
        const lowPriority = data.filter(task => task.priority === 'low');
        setTasks({ high: highPriority, medium: mediumPriority, low: lowPriority });
      })
      .catch(err => console.error("Error: ", err));
  }

  return (
    <div className="overview-container">
      <h2>OVERVIEW</h2>
      <div className="task-container">
        <div className="priority-container">
          <h3>HIGH PRIORITY TASKS</h3>
          {tasks.high.length > 0 ? (
            tasks.high.map(task => (
              <div key={task._id} className="task">
                {task.text}
              </div>
            ))
          ) : (
            <p>No high priority tasks available</p>
          )}
        </div>
        <div className="priority-container">
          <h3>MEDIUM PRIORITY TASKS</h3>
          {tasks.medium.length > 0 ? (
            tasks.medium.map(task => (
              <div key={task._id} className="task">
                {task.text}
              </div>
            ))
          ) : (
            <p>No medium priority tasks available</p>
          )}
        </div>
        <div className="priority-container">
          <h3>LOW PRIORITY TASKS</h3>
          {tasks.low.length > 0 ? (
            tasks.low.map(task => (
              <div key={task._id} className="task">
                {task.text}
              </div>
            ))
          ) : (
            <p>No low priority tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overview;
