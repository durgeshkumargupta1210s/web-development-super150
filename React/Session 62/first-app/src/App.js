import React from 'react';
import './App.css';
import Durgesh from './Components/Durgesh';   // ✅ Correct filename case
import Person from './Components/Person';     // ✅ Already looks fine

function App() {
  return (
    <div className="App">
      <Durgesh />
      {/* <Person name="Durgesh" age="21" color="red"/>
      <Person name="Abhijeet" age="20" color="pink"/>
      <Person name="Bittu " age="25" color="green"/>
      <Person name="Ayush" age="19" color="blue"/> */}
    </div>
  );
}

export default App;
