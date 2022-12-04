import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './login'
import Signup from './signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
