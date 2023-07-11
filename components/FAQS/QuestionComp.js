import { useState } from "react";

const QuestionComp = ({ Question, Answer, isOpen, handleToggle }) => {
  return (
    <div className="question-box">
      <button
        className={`question ${isOpen ? "active" : ""}`}
        onClick={() => {
          handleToggle();
        }}
      >
        {Question}
      </button>
      <p className={`answer ${isOpen ? "active" : ""}`}>{Answer}</p>
    </div>
  );
};

export default QuestionComp;
