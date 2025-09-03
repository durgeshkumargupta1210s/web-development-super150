import React, { useState } from 'react'

const Person = (props) => {
  let[name , setName]=useState(props.name);

  // let name=props.name;
  function handleClick(){
    setName('anonymous')
  }
  return (
    <div>

      <div onClick={handleClick}>i am a div do not click me</div>

      <h1> Hi durgesh here , Welcome to my React Page</h1>
      <h1>Name: {name}</h1>
      <h3>Age: {props.age}</h3>
      <p>Color: {props.color}</p>

    </div>
  )
}

export default Person