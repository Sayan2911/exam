import  { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Fpass = () => {
  const [email, setEmail] = useState('');

  // Function to display a toast notification
  const notifyWarn = () => toast.success('A reset link has been sent to your registered email');

  // Function to handle reset button click
  const handleReset = () => {
    console.log("hello");

    // Check if the email format is valid before showing the toast
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      return;
    }

    notifyWarn();
  };

  return (
    <div>
      <ToastContainer />
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{
          height: "100vh",
          width: '100vw',
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,31,185,1) 35%, rgba(0,212,255,1) 100%)"
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center flex-column border gap-2 rounded"
          style={{
            height: "85vh",
            width: '35vw',
            backgroundColor: "white"
          }}
        >
          <h2>Reset Password</h2>
          <input
            type="email"
            placeholder="Enter your registered Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded p-2 input-styling"
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Please enter a valid email address"
          />
          <button
            onClick={handleReset}
            className="btn btn-light"
            style={{
              background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,31,185,1) 35%, rgba(0,212,255,1) 100%)"
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fpass;
