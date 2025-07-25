import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : "Biswajit",
    email : "deybiswajit@gmail.com"
  }

  return (
    <>
      <h1 className='bg-green-400 text-orange-400 p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card  userName ="Biswajit" btnText="Click me"/>
     <Card userName="Akash" btnText="Visit me"/>
      

    </>
  )
}

export default App
