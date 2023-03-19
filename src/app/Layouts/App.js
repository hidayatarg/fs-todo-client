import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('test todo');


  useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/todo')
      .then((response) => setTodos(response.data.data))
      .catch((error) => console.log(error))

  }, []);

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setInputValue(event.target.value);
    // add to db
  };


  return (
    <div className="App">
      <header className="App-header">
        <div className='Rectangle'>
          <div className='logo-svg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32">
              <g fill="none" fillRule="evenodd">
                <path fill="#4A4AE5" d="M2.577 10.006L13.998 10.013 14.005 21.638 2.584 21.631z" transform="rotate(-45 8.29 15.822)" />
                <path fill="#4A77E5" d="M18.337 -0.692L29.758 -0.699 29.737 32.749 18.316 32.756z" transform="rotate(45 24.037 16.028)" />
              </g>
            </svg>
          </div>
          <div className='todo-title'>
            Todo List
          </div>
          <div className='todo-add'>
            <Input onChange={handleChange} value={inputValue} />

          </div>
          <div className='todo-list'>

            <ul>
              {todos.map((todo, i) => (
                <div key={i} >
                  <li key={todo.id}>{todo.title}</li>

                </div>
              ))}
            </ul>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
