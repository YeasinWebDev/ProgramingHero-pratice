import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React World Tour</h1>
      <Countries/>
    </>
  )
}

export default App
