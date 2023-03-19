import React, { useState, useEffect } from 'react';
import Input from './Input';
import './App.css';
import Header from './Header';
import Todos from '../../features/Todos';
import agent from '../api/agent';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getAllTodos();
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteTodo= (id) => {
    if (id) {
      agent.Todo.delete(id)
        .then((response) => {
          if (response.success) {
            getAllTodos();
          }
        })
        .catch((error) => console.log(error));
    }
  }

  const handleTodoChanged = (id, status) => {
    // start loading
    if (!status) {
      
      agent.Todo.checkCompleted(id)
      .then((response) => {
        if (response.success) {
          getAllTodos();
        }
      })
      .catch((error) => console.log(error));
    } else {
      agent.Todo.checkUncompleted(id)
      .then((response) => {
        if (response.success) {
          getAllTodos();
        }
      })
      .catch((error) => console.log(error));
    }
  };

  const getAllTodos = () => {
    agent.Todo.list()
    .then((response) => setTodos(response.data))
    .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue){
      const newTodo = {
        "title": inputValue,
        "isCompleted": false,
      }

      agent.Todo.create(newTodo)
        .then((response) => {
          if (response.success) {
            setInputValue('');
            getAllTodos();
          }
        })
        .catch((error) => console.log(error));
    }
    // show error message
  }

  const showAllTodos = () => {
    getAllTodos();
    setFilter('all');
  }

  const showCompletedTodos = () => {
    agent.Todo.list()
    .then((response) => {
      if (response.success) {
        const todos = response.data.filter(todo => todo.isCompleted === true);
        setTodos(todos);
        setFilter('completed');
      }
    })
      .catch((error) => console.log(error));
  } 
  
  const showUncompletedTodos = () => {
    agent.Todo.list()
    .then((response) => {
      if (response.success) {
        const todos = response.data.filter(todo => todo.isCompleted !== true);
        setTodos(todos);
        setFilter('uncompleted');
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
            handleTodoChanged={(id, isCompleted) => handleTodoChanged(id, isCompleted)}
            handleDeleteTodo={(id)=> handleDeleteTodo(id)}
            showAllTodos={showAllTodos}
            showCompletedTodos={showCompletedTodos}
            showUncompletedTodos={showUncompletedTodos}
            filter={filter}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
