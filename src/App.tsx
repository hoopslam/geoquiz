import Questions from "./components/Questions";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppStyles } from "./styles/App.style";
import { useAppStore } from "./store/store";
import Time from "./components/Time";
import Score from "./components/Score";
import Footer from "./components/Footer";
import DifficultySelector from "./components/DifficultySelector";

function App() {
  const { gameOver, loading, questionNumber, startQuiz } = useAppStore();

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
        <Footer />
      </AppStyles>
    </>
  );
}

export default App;
