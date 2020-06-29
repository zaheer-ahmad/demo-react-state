import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [lit,setLit] = useState(false);
  let [age,setAge] = useState(23);
  function updateLight()
  {
    setLit(!lit);
  }
  return (
    <div>
      <p>Current light mode is {lit?'light':'dark'}</p>
      <p>Age is {age}</p>
      <br/>
    <button onClick={updateLight}>Toggle Light</button>
    <button onClick={()=>{
      setAge(++age);
    }}>Increment Age</button>
    </div>
    
  );
}

export default App;
