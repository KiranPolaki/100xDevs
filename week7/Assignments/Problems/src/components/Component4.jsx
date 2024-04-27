import { useState } from "react";

export function Component4() {
  const [wordCount, setWordCount] = useState("");
  return (
    <div className="comp4-container">
      <div className="input-container">
        <input
          type="number"
          placeholder="Count..."
          value={wordCount}
          onChange={(e) => {
            setWordCount(e.target.value);
          }}
          className="input-field"
        />
        <button className="input4-btn">Generate</button>
      </div>
      <div className="results-container"></div>
    </div>
  );
}
