import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Landing from './pages/Landing';
import Signup from './components/Signup';
import Analysis from './pages/Analysis';
import Login from './components/Login';
import Today from './pages/Today';
import Weekly from './pages/Weekly';
import Projects from './pages/Projects';
import Teams from './pages/Teams';

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Dashboard' element={<Analysis/>} />
        <Route path='/today' element={<Today/>} />
        <Route path='/weekly' element={<Weekly/>} />
        <Route path='/myprojects' element={<Projects/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
