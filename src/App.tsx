//components
import Questions from "./components/Questions";
import Time from "./components/Time";
import Score from "./components/Score";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import DifficultySelector from "./components/DifficultySelector";

//store
import { useAppStore } from "./store/store";

//styles
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppStyles } from "./styles/App.style";

function App() {
  const { gameOver, loading, questionNumber, userAnswers, startQuiz } =
    useAppStore();

  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <h1>Geo Quiz</h1>
        {gameOver && (
          <div className="start-options">
            <DifficultySelector />
            <button className="start-button" onClick={startQuiz}>
              Start New Quiz
            </button>
          </div>
        )}
        {loading && <p>Loading Quiz...</p>}
        {!loading && !gameOver && questionNumber < 10 && (
          <div className="card-container">
            <div className="score">
              <Time />
              <Score />
            </div>
            <Questions />
          </div>
        )}
        {gameOver && userAnswers.length > 0 && <Summary />}
        <Footer />
      </AppStyles>
    </>
  );
}

export default App;
