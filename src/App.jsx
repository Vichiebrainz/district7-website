import { Routes, Route } from 'react-router-dom'
import Home from './districtHomePages/landingPage/Home'
import Login from './districtHomePages/loginPage/Login';
import Register from './districtHomePages/registerPage/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
