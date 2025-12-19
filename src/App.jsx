import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Attendencepage from './pages/attendencepage'
import Attendenceform from './components/attendenceform'
import Attendencetable from './components/attendencetable'
import Header from './components/header'
import Studentsrow from './components/studentsrow';  // Assuming this is the correct import

// Placeholder for Dashboard – replace with actual component
const Dashboard = () => <div>Dashboard Page</div>;

// Placeholder for NotFound – replace with actual component
const NotFound = () => <div>Page Not Found</div>;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Attendencepage />} />  // Default route
      <Route path="/attendencepage" element={<Attendencepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Attendenceform" element={<Attendenceform />} />
      <Route path="/Attendencetable" element={<Attendencetable />} />
      <Route path="/studentsrow" element={<Studentsrow />} />
      <Route path="/Header" element={<Header />} />
      <Route path="*" element={<NotFound />} />  // Catch-all for 404
    </Routes>

    </>
  )
}

export default App
