import React from 'react'

let  arr2=["😍","❤️","🤣" ,"💕", "👍","🙌","😒","😘","👌"];
let emoji=Math.floor(Math.random()*9);
let todos=["day1", "day2", "day3","day4", "day5", "day6","day7","day8"]
const Durgesh = () => {
  return (
    <div>
      <h1>
        {arr2[emoji]}

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