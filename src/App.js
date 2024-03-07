import { useEffect, useState } from "react";
import "./style.css";
import fiterApiData from "./utils/filteredApiData";
import { triviaQuestions } from "./services/triviaQuestions.services";
import StartPage from "./components/pages/StartPage";
import GamePage from "./components/pages/GamePage";

export default function App() {
  const [triviaData, setTriviaData] = useState({
    success: false,
    isStarted: false,
    highScore: localStorage.getItem("data"),
    data: null,
  });

  useEffect(() => {
    async function getData() {
      const data = await triviaQuestions();
      setTriviaData({ ...triviaData, data: fiterApiData(data) });
    }
    getData();
  }, []);

  function dataFromQuestionContainerComponent(data) {
    setTriviaData({ ...triviaData, data: data });
  }

  function startGame() {
    setTriviaData({ ...triviaData, isStarted: true });
  }

  if (triviaData.data === null) {
    return (
      <div className="container loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        {!triviaData.isStarted && (
          <StartPage handleClick={startGame} highScore={triviaData.highScore} />
        )}
        {triviaData.isStarted && (
          <GamePage
            data={triviaData.data}
            handleData={dataFromQuestionContainerComponent}
          />
        )}
      </div>
    </>
  );
}
