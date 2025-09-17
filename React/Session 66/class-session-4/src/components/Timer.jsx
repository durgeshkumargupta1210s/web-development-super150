import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time,setTime]=useState(0);



    // jugad 

    useEffect(function(){
        setTimeout(()=>{
            setTime(time+1)
        },1000)
        // return ()=>clearInterval(id); // cleanup function
        // we use this beacuse time destroyed nhi ho rha tha 
    },[time])

    

    // useEffect(function(){
    //     let id=setInterval(()=>{
    //         setTime(time+1)
    //     },1000)

    //     return ()=>clearInterval(id); // cleanup function
    //     // we use this beacuse time destroyed nhi ho rha tha 
    // },[time])

  return (
    <h1>Time :{time}</h1>
  )
}

export default Timer