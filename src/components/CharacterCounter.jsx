import React, { useState } from "react";
import "../assets/characterCount.css";

function LiveCharCounter() {
  const [text, setText] = useState("");

  return (
    <div className="char-counter-container">
      <h2>Live Character Counter</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing something..."
        className="char-input"
      />

      <p className="char-count">Character Count: {text.length}</p>

      <button className="clear-btn" onClick={() => setText("")}>
        Clear
      </button>

      {text && (
        <div className="live-preview-modal">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default LiveCharCounter;
