import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);  // its mean {let counter = 15;}

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log("Value added", counter);
    } else {
      console.log("Maximum value reached");
    }
  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }else {
      console.log("Minimum value reached");
    }
     
  }

  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value {counter}</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
