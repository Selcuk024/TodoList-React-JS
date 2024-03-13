import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('hoi')

  useEffect(() => {
    setCount(count +1);
  }, [name])

  return (
    <>
    <h1>{count}</h1>
    
    <input onChange={(e) => setName(e.target.value)}></input>

    
    </>
  )
}

export default App
