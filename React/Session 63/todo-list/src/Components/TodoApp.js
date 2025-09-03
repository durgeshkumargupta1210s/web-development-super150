import React, { useState } from 'react'
import TodoList from './TodoList'
import Form from "./Form";  // ✅ matches Form.js
import {v4 as uuid } from 'uuid'

const TodoApp = () => {
    let arrayDummy=[
        {
            id:uuid(),
            todo:"Eat"
        },
        {
            id:uuid(),
            todo:"Code"
        },
        {
            id:uuid(),
            todo:"Sleep"
        },
        {
            id:uuid(),
            todo:"Repeat"
        }
    ]

    let [todos, setTodos]=useState(arrayDummy);

    const addTodo=(todo)=>{
         setTodos([...todos,todo])
    }

    const deleteTodo=(id)=>{
       const newTodo=todos.filter((todo)=>{
        return todo.id !==id
       })

       setTodos(newTodo)
    }
  return (
    <div>
        <h1>TodoList for Durgesh</h1>
        <Form addTodo={addTodo} todos={todos} />
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default TodoApp