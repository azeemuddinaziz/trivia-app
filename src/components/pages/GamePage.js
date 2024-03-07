import { useState } from "react";
import QuestionContainer from "../ui/QuestionContainer";

export default function GamePage(props) {
  const [stats, setStats] = useState({
    isFinished: false,
    correct_answers: 0,
    total_questions: 5,
  });

  function checkCorrectAnswers() {
    props.data.map((item) =>
      item.options.map((option) => {
        if (option.isSelected && option.isCorrect) {
          setStats({ ...stats, correct_answers: stats.correct_answers++ });
        }
      })
    );
  }

  function submitAnswers() {
    checkCorrectAnswers();
    setStats({ ...stats, isFinished: true });
  }

  function newGame() {
    window.location.reload();
  }

  return (
    <div className={`container game ${stats.isFinished && "finished"}`}>
      <QuestionContainer
        data={props.data}
        handleData={props.handleData}
        finished={stats.isFinished}
      />
      <div className={`footer ${stats.isFinished && "finished"}`}>
        {stats.isFinished && (
          <h4>
            You scored {stats.correct_answers}/{stats.total_questions} correct
            answers
          </h4>
        )}
        <button onClick={stats.isFinished ? newGame : submitAnswers}>
          {stats.isFinished ? "Play Again" : "Check Answers"}
        </button>
      </div>
    </div>
  );
}
