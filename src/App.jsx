import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Fpass from './components/Fpass';

function App() {
 

  return (
    <Router>
     

    <Routes>
      
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<Fpass />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Signup />} />
    </Routes>
  </Router>
  )
}

export default App
