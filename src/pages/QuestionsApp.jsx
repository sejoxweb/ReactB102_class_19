import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";

const QuestionApp = () => {
  const [questions, setQuestions] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [answer, setAnswer] = useState(null);
  console.log("answer>>>", answer);
  console.log("questions>>>", questions);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get("http://localhost:3004/questions");
      console.log("data", response.data);
      setQuestions(response.data);
    };
    fetchQuestions();
  }, []);

  const handleComplete = () => {
    setQuestions((questions) =>
      questions.map((q) => {
        const tempObj = {
          ...q,
        };
        if (q.id === selectedQuestion.id) {
          tempObj.status = true;
        }
        return tempObj;
      })
    );
    setSelectedQuestion({});
    setAnswer(null);
  };

  const unCompleted = questions.filter((q) => q.status === false);
  const completed = questions.filter((q) => q.status === true);

  if (selectedQuestion.id) {
    return (
      <div>
        {selectedQuestion.name} <br />
        {selectedQuestion.answers.map((an) => (
          <label key={an.answerId}>
            <input
              type="radio"
              name="choice-radio"
              value={an.name}
              onClick={(e) => setAnswer(e.target.value)}
            />{" "}
            {an.name}
          </label>
        ))}
        <br />
        <button onClick={handleComplete}> complete </button>
      </div>
    );
  } else {
    return (
      <div>
        QuestionApp <span onClick={() => setModalOpen(true)}> Show all</span>
        <ul>
          {unCompleted.length > 0 &&
            unCompleted.map((question) => (
              <li
                key={question.id}
                onClick={() => setSelectedQuestion(question)}
              >
                {question.name}
              </li>
            ))}
        </ul>
        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <h1>Uncompleted</h1>
            <ul>
              {unCompleted.length > 0 &&
                unCompleted.map((question) => (
                  <li
                    key={question.id}
                    onClick={() => setSelectedQuestion(question)}
                  >
                    {question.name}
                  </li>
                ))}
            </ul>
            <h1>Completed</h1>
            <ul>
              {completed.length > 0 &&
                completed.map((question) => (
                  <li key={question.id}>{question.name}</li>
                ))}
            </ul>
          </Modal>
        )}
      </div>
    );
  }
};

export default QuestionApp;
