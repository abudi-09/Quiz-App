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
  const [index, setIndex] = useState(2);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
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
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
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
            checkAns(e);
          }}
        >
          {question.option1}
        </li>
        <li
          ref={option2}
          onClick={(e) => {
            checkAns(e, 1);
          }}
        >
          {question.option2}
        </li>
        <li
          ref={option3}
          onClick={(e) => {
            checkAns(e, 1);
          }}
        >
          {question.option3}
        </li>
        <li
          ref={option4}
          onClick={(e) => {
            checkAns(e, 1);
          }}
        >
          {question.option4}
        </li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 Questions</div>
    </div>
  );
}
