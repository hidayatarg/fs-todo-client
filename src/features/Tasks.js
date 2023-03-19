import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Tasks (props) {
  return (
    <div className="todo-list">
    <ul>
      {props.todos.map((todo, i) => (
        <div key={i}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={todo.isCompleted}
                  onChange={() => props.handleTaskChanged(todo.id, todo.isCompleted)}
                />
              }
              label={todo.title}
            />
          </FormGroup>
        </div>
      ))}
    </ul>
  </div>
  )
}
