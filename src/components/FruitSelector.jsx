import React, { useState } from "react";
import "../assets/fruitSelector.css";

const fruitData = {
  Apple: "🍎",
  Banana: "🍌",
  Mango: "🥭",
  Orange: "🍊",
  Grapes: "🍇",
  Pineapple: "🍍",
};

function FavoriteFruitSelector() {
  const [selectedFruit, setSelectedFruit] = useState("");

  return (
    <>
      <h2>Choose Your Favorite Fruit</h2>
      <select
        value={selectedFruit}
        onChange={(e) => setSelectedFruit(e.target.value)}
        className="fruit-select"
      >
        <option value="">-- Select a fruit --</option>
        {Object.keys(fruitData).map((fruit) => (
          <option key={fruit} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>

      <button className="clear-btn" onClick={() => setSelectedFruit("")}>
        Clear
      </button>

      {selectedFruit && (
        <div className="fruit-display">
          <div className="fruit-emoji">{fruitData[selectedFruit]}</div>
          <div className="fruit-name">{selectedFruit}</div>
        </div>
      )}
    </>
  );
}

export default FavoriteFruitSelector;
