import './App.css'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './Styles/global.css'
import Create from './Pages/create'
import Login from './Pages/login'
import Userprofile from './Pages/Userprofile'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/userprofile' element={<Userprofile/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
