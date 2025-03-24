import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './Styles/global.css';
import Userprofile from './Pages/Userprofile';
import CreateProfile from './Pages/CreateProfile';
import Login from './Pages/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<CreateProfile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/userprofile' element={<Userprofile/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
