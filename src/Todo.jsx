import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, inputValue]);
    setInputValue('');
    
  }

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <div className="container">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
                <input type="checkbox" />
                {task}
              
              <button className='delete-button'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
