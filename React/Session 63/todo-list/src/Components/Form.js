import React, { useState } from 'react';
import {v4 as uuid } from 'uuid'

const Form = (props) => {
  let [input, setInput] = useState('');

  function formSubmitHandler(e) {
    e.preventDefault(); // preventing from getting submitted
    const newTodo={
      id:uuid(),
      todo:input
    }

    props.addTodo(newTodo) // logs the task
    setInput(''); // resets the input field
  }

  function inputChangeHandler(e) {
    setInput(e.target.value); // ✅ correct way
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <input 
        type="text" 
        placeholder="Enter your task" 
        value={input}   // ✅ bind input state
        onChange={inputChangeHandler} 
      />
      <button type="submit">Add</button> {/* optional button */}
    </form>
  );
};

export default Form;
