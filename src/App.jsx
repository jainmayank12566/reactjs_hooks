import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter,setCounter]=useState(0);
  const addvalue=()=>{
    if(counter<20){
    setCounter(counter+1)
    }
  }
  const decvalue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }
  }
  return (
    <>
    {/* <h1>namaste</h1> */}
    <h1>value:{counter}</h1>
    <button onClick={addvalue}>incrementvalue</button>  
    <button onClick={decvalue}>decrementvalue</button>
    </>
  )
}

export default App
