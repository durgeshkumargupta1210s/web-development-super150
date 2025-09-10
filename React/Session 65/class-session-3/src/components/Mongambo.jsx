import React, { useState } from 'react'


// const Mongambo = (props) => {
const Mongambo = ({naam}) => {
    let [name,setNaam]=useState(naam);

   async function handleNaam(){
        console.log(name,"before")
       await setNaam('Anonymous')
        console.log(name,"after")
    }

  return (
    <div>
        <button onClick={handleNaam}>Naam badal dunga- {name} </button>
    </div>
  )
}

export default Mongambo;

// change in state then component re renders // line no 9 chnages the state

// setState()- asynchronous function it takes time to reload







// import React from 'react'
// import {useState} from 'react'

// // const Mongambo = (props) => {
// const Mongambo = ({naam}) => {
//     let myName=naam;

//     function handleNaam(){
//         console.log(myName,"before")
//         myName="Anonymous"
//         console.log(myName,"after")
//     }

//   return (
//     <div>
//         <button onClick={handleNaam}>Naam badal dunga- {myName} </button>
//     </div>
//   )
// }

// export default Mongambo;

// useState() in react =variable in js
// hooks-useState(); // inbuild function of react
// in case of varible chnaging no rendering happening so it does not show on ui
