import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Projects from './components/projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Home/>
      <Projects />
    </>
  )
}

export default App
