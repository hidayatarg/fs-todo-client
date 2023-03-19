import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import './App.css';
import Header from './Header';
import Todos from '../../features/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('test todo');

  useEffect(() => {
    getAllTask();
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteTodo= (id) => {
    if (id) {
      axios
        .delete(`http://localhost:4000/api/v1/todo/${id}`)
        .then((response) => {
          if (response.data.success) {
            getAllTask();
          }
        })
        .catch((error) => console.log(error));
    }
  }

  const handleTaskChanged = (id, status) => {
    console.log('gelen id', id, ' gelen status', status);
    // start loading
    if (!status) {
      axios
        .put(`http://localhost:4000/api/v1/todo/${id}/completed`, null)
        .then((response) => {
          if (response.data.success) {
            getAllTask();
          }
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .put(`http://localhost:4000/api/v1/todo/${id}/uncompleted`, null)
        .then((response) => {
          if (response.data.success) {
            getAllTask();
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const getAllTask = () => {
    axios
      .get('http://localhost:4000/api/v1/todo')
      .then((response) => setTodos(response.data.data))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
    // add to db
    const task = {
      "title": inputValue,
      "isCompleted": false,
    }
    axios
      .post('http://localhost:4000/api/v1/todo/new', task)
      .then((response) => {
        if (response.data.success) {
          getAllTask();
        }
      })
      .catch((error) => console.log(error));

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Rectangle">
          <Header />
          <div className="todo-add">
            <form onSubmit={handleSubmit}>
              <Input onChange={handleChange} value={inputValue} />
            </form>
          </div>
          <Todos
            todos={todos}
            handleTaskChanged={(id, isCompleted) =>
              handleTaskChanged(id, isCompleted)
            }
            handleDeleteTodo={(id)=> handleDeleteTodo(id)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
