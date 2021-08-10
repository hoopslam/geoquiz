import Questions from "./components/Questions";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppStyles } from "./styles/App.style";
import { useAppStore } from "./store/store";

function App() {
  const {
    gameOver,
    loading,
    questionNumber,
    time,
    score,
    questions,
    userAnswers,
    startQuiz,
    checkAnswer,
    selectDifficulty,
  } = useAppStore();

  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <h1>Geo Quiz</h1>

        {gameOver && (
          <div className="start-options">
            <div>
              <label htmlFor="difficulty">Choose difficulty: </label>
              <select
                name="difficulty"
                id="difficulty"
                onChange={selectDifficulty}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <button className="start-button" onClick={startQuiz}>
              Start New Quiz
            </button>
          </div>
        )}

        {loading && <p>Loading Quiz...</p>}
        {!loading && !gameOver && questionNumber < 10 && (
          <div className="card-container">
            <div className="score">
              <p>Time: {time}s</p>
              <p>Score: {score}</p>
            </div>
            <Questions
              questionNumber={questionNumber + 1}
              question={questions[questionNumber].question}
              answers={questions[questionNumber].answers}
              userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
              checkAnswer={checkAnswer}
            />
          </div>
        )}
        <footer>
          <div className="attribution">
            <p>
              Website made by <a href="https://devcho.com">David Cho</a>{" "}
              &copy;2021
            </p>
            <p>
              Background photo by{" "}
              <a href="https://unsplash.com/@nsx_2000">Krzysztof Hepner</a>
            </p>
          </div>
        </footer>
      </AppStyles>
    </>
  );
}

export default App;
