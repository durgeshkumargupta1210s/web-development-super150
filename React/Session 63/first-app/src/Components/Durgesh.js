import React from 'react'

let  arr2=["😍","❤️","🤣" ,"💕", "👍","🙌","😒","😘","👌"];
let emoji=Math.floor(Math.random()*9);
let todos=["day1", "day2", "day3","day4", "day5", "day6","day7","day8"]
const Durgesh = () => {
  return (
    <div>
      <h1>
        {arr2[emoji]}

        {emoji === 3 ? <img src="https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt='mountain'/> : "tumse na ho pyega"}

        {
          todos.map((item,index)=>{
            return <li key={index}>My task is {item} & podition is {index}</li>
          })
        }

      </h1>
    </div>
  )
}

export default Durgesh