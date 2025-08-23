import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h1> Hi durgesh here , Welcome to my React Page</h1>
      <h1>Name: {props.name}</h1>
      <h3>Age: {props.age}</h3>
      <p>Color: {props.color}</p>

    </div>
  )
}

export default Person