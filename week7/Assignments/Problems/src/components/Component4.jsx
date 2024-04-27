import { useState } from "react";

export function Component4() {
  const [sentence, setSentence] = useState("");
  const [wordCount, setWordCount] = useState("");

  const wordList = ["Sai", "is", "Hi", "Hey", "GoodNight", "Naughty", "Hora"];

  const generateSentence = () => {
    let wc = parseInt(wordCount);
    let i = 0;
    let newSentence = "";
    while (wc !== 0) {
      if (i > wordList.length) {
        i = 0;
      }
      newSentence += wordList[i % wordList.length] + " ";
      i++;
      wc--;
    }
    setSentence(newSentence.trim());
  };

  return (
    <div className="comp4-container">
      <div className="input-container">
        <input
          type="number"
          placeholder="Count..."
          value={wordCount}
          onChange={(e) => setWordCount(e.target.value)}
          className="input-field"
        />
        <button className="input4-btn" onClick={generateSentence}>
          Generate
        </button>
      </div>
      <div className="results-container">{sentence}</div>
    </div>
  );
}

export default Component4;
