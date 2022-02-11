import './App.css';
import React, { useState} from "react";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = (e) => {
    e.preventDefault();
    if (!question) {
      return;
    }
    let url = `https://8ball.delegator.com/magic/JSON/${question}`
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json.magic)
        const newArr = [];
        newArr.push(json.magic)
        console.log(newArr)
        setAnswer(newArr[0].answer);
      })
  };

  return (
    <div>
      <form onSubmit={getAnswer}>
        <div>
          <label>question</label>
          <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <button type="submit">get answer</button>
      </form>
      <div className="circle">
        <p>{answer}</p>
      </div>
    </div>
  );
}

