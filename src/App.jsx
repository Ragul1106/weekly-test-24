import React, { useState } from 'react';
import './App.css';
import Navbar from './NavBar';

import GroceryList from './components/GroceryList';
import LoginStatus from './components/LoginToggle';
import AgeIncreaser from './components/AgeIncreaser';
import LiveCharCounter from './components/CharacterCounter';
import FavoriteFruitSelector from './components/FruitSelector';

import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const renderCurrentProject = () => {
    switch (currentTab) {
      case 0: return <GroceryList />;
      case 1: return <LoginStatus />;
      case 2: return <AgeIncreaser />;
      case 3: return <LiveCharCounter />;
      case 4: return <FavoriteFruitSelector />;
      default: return null;
    }
  };

  return (
    <div className="app-wrapper">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="content-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            variants={{
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -30 }
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="component-box"
          >
            {renderCurrentProject()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
