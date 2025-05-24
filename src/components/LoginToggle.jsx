import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/loginToggle.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginToggle = () => {
  const [name, setName] = useState('');
  const [enteredName, setEnteredName] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setEnteredName(true);
    } else {
      toast.warn('Please enter your name');
    }
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    toast.info(!isLoggedIn ? '🔓 Logged in' : '🔐 Logged out');
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} />

      {!enteredName ? (
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Welcome! Please enter your name</h2>
          <input
            type="text"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleNameSubmit}>Enter</button>
        </motion.div>
      ) : (
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Login Status Toggle</h2>
          <button
            className={`login-button ${isLoggedIn ? 'logout' : 'login'}`}
            onClick={toggleLogin}
          >
            {isLoggedIn ? '🔓 Logout' : '🔐 Login'}
          </button>

          <AnimatePresence mode="wait">
            {isLoggedIn ? (
              <motion.p
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                👋 Welcome back, <strong>{name}</strong>!
              </motion.p>
            ) : (
              <motion.p
                key="login"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                😴 Please login to continue.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

export default LoginToggle;
