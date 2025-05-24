import React, { useState } from 'react';
import '../assets/ageIncreaser.css';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AgeIncreaser = () => {
  const [name, setName] = useState('');
  const [entered, setEntered] = useState(false);
  const [age, setAge] = useState(20);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleStart = () => {
    if (name.trim()) {
      setEntered(true);
    } else {
      toast.warn("Please enter your name");
    }
  };

  const increaseAge = () => {
    const newAge = age + 1;
    setAge(newAge);
    if (newAge % 5 === 0) {
      setShowConfetti(true);
      toast.success(`🎉 Congrats ${name}, you reached ${newAge}!`);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2500} />

      {!entered ? (
        <motion.div
          className="age-profile"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Enter Your Name</h2>
          <input
            type="text"
            placeholder="Type your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleStart}>Start</button>
        </motion.div>
      ) : (
        <motion.div
          className="age-profile"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Age Increaser Card</h2>
          <h4>increase upto 25 & Wait</h4>
          <h3>Hello, <span className="highlight-name">{name}</span> 👋</h3>
          <motion.p
            key={age}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={age % 5 === 0 ? 'milestone' : ''}
          >
            🎂 You are {age} years old!
          </motion.p>
          <button onClick={increaseAge}>Increase Age</button>
        </motion.div>
      )}

      {showConfetti && <Confetti />}
    </>
  );
};

export default AgeIncreaser;
