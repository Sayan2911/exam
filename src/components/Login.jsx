import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authStore, toggleAuth } from '../redux/authSlice'; // Import actions from Redux slice
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifyWarn = () => toast.warn('Invalid email or password. Please try again.');
  // Select the stored user data from Redux (assuming signup stores it here)
  const storedUserData = useSelector((state) => state.auth.value);

  const handleLogin = () => {
    // Check if the entered email and password match the stored user data
    if (storedUserData.email === email && storedUserData.password === password) { 
      dispatch(toggleAuth()); // Dispatch action to toggle auth state
      navigate('/home'); // Navigate to the home page
    } else {
      
      notifyWarn()
    }
  };
  const handleLoginGoogle = () => {
    // Check if the entered email and password match the stored user data
   
      alert('google api has not setup yet.');
    
  };

  return (
    
    <div className='d-flex justify-content-center align-items-center flex-column' style={{height:"100vh" ,width:'100vw',background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,31,185,1) 35%, rgba(0,212,255,1) 100%)"}} >
   <ToastContainer/>
      <div className='d-flex justify-content-center align-items-center flex-column border gap-2 rounded' style={{height:"85vh" ,width:'35vw',backgroundColor:"white"}}>

      <h2 className=''>Login </h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='rounded p-2 input-styling '
        />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='rounded p-2 input-styling '
        />
      <Link to='/forgotpassword'>forgot password?</Link>
      <button onClick={handleLogin} className='btn btn-light' style={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,31,185,1) 35%, rgba(0,212,255,1) 100%)"}}>Login</button>
      <button onClick={handleLoginGoogle} className='btn btn-light' style={{fontSize:"15px",background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,31,185,1) 35%, rgba(0,212,255,1) 100%)"}}> <FcGoogle size={25} />  login with google</button>
   
        </div>
    </div>
  );
};

export default Login