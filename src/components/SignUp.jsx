import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authStore, toggleAuth } from '../redux/authSlice'; // Import actions from Redux slice
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styling.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCpassword] = useState('');
  const [DOB, setDOB] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifyWarn = () => toast.warn('Something went wrong. Please check your inputs.');

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if passwords match and all required fields are filled
    if (password !== Cpassword) {
      notifyWarn();
      return;
    }
    if (!name || !email || !password || !DOB) {
      notifyWarn();
      return;
    }

    const userData = { name, email, password, DOB }; // Create user data object
    dispatch(authStore(userData)); // Dispatch action to store user data
    dispatch(toggleAuth()); // Dispatch action to toggle auth state

    navigate('/login'); // Navigate to the login page
  };

  const today = new Date();
  const maxDate = today.toISOString().split("T")[0];


  
  




  const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // At least 8 chars, one uppercase, one lowercase, one digit, and one special char

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: '100vh', width: '100vw',background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,31,185,1) 35%, rgba(0,212,255,1) 100%)" }}
    > 
      <form action="" onSubmit={(e) => handleSignup(e)}>
        <div
          className="d-flex justify-content-center align-items-center flex-column border gap-2 rounded"
          style={{ height: '85vh', width: '35vw', backgroundColor: 'white' }}
        >
          <h2 className="">Registration</h2>

          <ToastContainer />

        <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        pattern={namePattern.source}
        title="Name should contain only letters and spaces"
        className="rounded p-2 input-styling"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        pattern={emailPattern.source}
        title="Please enter a valid email address"
        className="rounded p-2 input-styling"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        pattern={passwordPattern.source}
        title="Password must be at least 8 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character"
        className="rounded p-2 input-styling"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={Cpassword}
        onChange={(e) => setCpassword(e.target.value)}
        required
        pattern={password} // Matches the password value
        title="Confirm Password must match the Password"
        className="rounded p-2 input-styling"
      />

      {/* Show an error message if passwords do not match */}
      {Cpassword.length !== 0 && password !== Cpassword && (
        <p style={{ color: 'red' }}>*Passwords do not match</p>
      )}
      
      <input
        type="date"
        placeholder="Date of Birth"
        value={DOB}
        onChange={(e) => setDOB(e.target.value)}
        required
        id="inputdate"
        name="inputdate"
        className="rounded p-2 input-styling"
        max={maxDate}
       
      />
         

          <button className="btn btn-light" style={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,31,185,1) 35%, rgba(0,212,255,1) 100%)"}}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
