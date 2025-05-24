import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/groceryList.css';

const GroceryList = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const addItem = () => {
    if (item.trim()) {
      setList([...list, item.trim()]);
      setItem('');
      setError(false);
    } else {
      setError(true);
    }
  };

  const clearList = () => {
    setList([]);
    setError(false);
  };

  return (
    <>
      <div className="grocery-container">
        <h2 className="title">Grocery List 🛒</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter grocery item..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className={error ? 'input-error' : ''}
            onKeyDown={e => e.key === 'Enter' && addItem()}
          />
          <button className="add-btn" onClick={addItem}>Add</button>
        </div>

        {error && <p className="error-text">⚠️ Please enter a valid item.</p>}

        <button className="clear-btn" onClick={clearList} disabled={list.length === 0}>
          Clear List
        </button>

        <ul className="grocery-list">
          <AnimatePresence>
            {list.map((grocery, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {grocery}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </>
  );
};

export default GroceryList;
