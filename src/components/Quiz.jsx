import React, { useState, useRef } from "react";
import "./Quiz.css";
//import data from "../assets/data.js";

const data = [
  {
    question: "Which device is required for the Internet connection?",
    option1: "Modem",
    option2: "Router",
    option3: "LAN Cable",
    option4: "Pen Drive",
    ans: 1,
  },
  {
    question: "Which continent has the highest number of countries?",
    option1: "Asia",
    option2: "Europe",
    option3: "North America",
    option4: "Africa",
    ans: 4,
  },
  {
    question: "Junk e-mail is also called?",
    option1: "Spam",
    option2: "Fake",
    option3: "Archived",
    option4: "Bin",
    ans: 1,
  },
  {
    question: "A computer cannot BOOT if it does not have the?",
    option1: "Application Software",
    option2: "Internet",
    option3: "Operating System",
    option4: "Mouse",
    ans: 3,
  },
  {
    question: "First page of Website is termed as?",
    option1: "Index Page",
    option2: "Homepage",
    option3: "Sitemap",
    option4: "Pen Drive",
    ans: 2,
  },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);
  const option_array = [option1, option2, option3, option4];
  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");

        option_array[question.ans - 1].current.classList.add("correct");
        setLock(true);
      }
    }
  };

  const next = () => {
    if (lock === true) {
      const newIndex = index + 1;
      if (newIndex < data.length) {
        setIndex(newIndex);
        setQuestion(data[newIndex]);
        setLock(false);
        option_array.forEach((option) => {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
        });
      } else {
        alert(`Quiz finished! Your score: ${score}/${data.length}`);
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        option_array.forEach((option) => {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
        });
      }
    }
  };

  return (
    <div className="container">
      <h1>Quiz-App</h1>
      <hr />
      <h2>
        {index + 1} {question.question}
      </h2>
      <ul>
        <li
          ref={option1}
          onClick={(e) => {
            checkAns(e, 1);
          }}
        >
          {question.option1}
        </li>
        <li
          ref={option2}
          onClick={(e) => {
            checkAns(e, 2);
          }}
        >
          {question.option2}
        </li>
        <li
          ref={option3}
          onClick={(e) => {
            checkAns(e, 3);
          }}
        >
          {question.option3}
        </li>
        <li
          ref={option4}
          onClick={(e) => {
            checkAns(e, 4);
          }}
        >
          {question.option4}
        </li>
      </ul>
      <button onClick={next}> Next</button>
      <div className="index">
        {index + 1} of {data.length}of Questions
      </div>
    </div>
  );
}
