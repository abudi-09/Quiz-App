import React, { useState } from "react";
import "./Quiz.css";

export const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz-App</h1>
      <hr />
      <h2>Which device is required for connection?</h2>
      <ul>
        <li>Router</li>
        <li>Modem</li>
        <li>LAN cable</li>
        <li>Pen Drive</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 Questions</div>
    </div>
  );
};
