import React from 'react'
import Person from './components/Person'
import Mongambo from './components/Mongambo'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
     <h1>App</h1>
      {/* <Person name="samarth Vohra" age={50} favColor="Blue"/> 
      <Person name="Durgesh Gupta" age={21} favColor="Red"/>
      <Person name="Namit Jain" age={21} favColor="Pink"/> */}


      {/* <Person></Person> */}

      {/* {Person()} */}

      {/* <Mongambo naam="samarth"/> */}
      <Counter></Counter>
      
      </div>
    
  )
}

export default App