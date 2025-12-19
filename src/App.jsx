import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Attendencepage from './pages/attendencepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Attendencepage />
    </>
  )
}

export default App
