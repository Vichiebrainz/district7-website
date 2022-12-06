import { Routes, Route } from 'react-router-dom'
import Home from './districtHomePages/landingPage/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
