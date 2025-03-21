import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter, setCounter] = useState(0)

  function addValue(){
    if (counter<5){
      setCounter(counter + 1)   
    }    
  }

  function removeValue(){
    if (counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
     <h1>React and Us.</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove value</button> 
     </>
  )
}

export default App
