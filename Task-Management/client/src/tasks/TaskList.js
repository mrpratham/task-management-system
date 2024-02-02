import React, { useState, useEffect } from 'react';
import './Task.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import TaskDisplay from './TaskDisplay'; // Import the TaskDisplay component

const api = 'http://localhost:3001';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("default");

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    fetch(api + '/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Error: ", err));
  }

  const addTask = async () => {
    if (priority === "default") {
      alert("Set priority");
    } else {
      if (newTask === "") {
        alert("Set text");
      } else {
        const data = await fetch(api + "/task/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            text: newTask,
            priority: priority
          })
        }).then(res => res.json());

        if (newTask !== "") {
          setTasks([...tasks, data]);
        }
        setNewTask("");
        setPriority("default");
      }
    }
  }

  const deleteTask = async id => {
    const data = await fetch(api + '/task/delete/' + id, { method: "DELETE" })
      .then(res => res.json());

    setTasks(tasks => tasks.filter(task => task._id !== data.result._id));
  }

  return (
    <div className="taskContainer">
      <div className="inputGroup">
  <h2>ADD A NEW TASK</h2>
  <div className="inputWrapper">
    <input
      type="text"
      onChange={e => setNewTask(e.target.value)}
      value={newTask}
      placeholder='Task name'
      name='text'
      className='taskInput'
    />
    <select value={priority} onChange={(e) => setPriority(e.target.value)} className="priority-dropdown">
      <option value="default" disabled hidden>Priority</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <div className="dropdownIcon">
      <i className="fas fa-chevron-down"></i>
    </div>
  </div>
  <div className='taskButton' onClick={addTask}>Add</div>
</div>

      <TaskDisplay tasks={tasks} deleteTask={deleteTask} /> {/* Render TaskDisplay component */}
    </div>
  );
}

export default TaskList;
