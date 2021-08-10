import { Card } from "../styles/Questions.style";
import { useAppStore } from "../store/store";

const Questions: React.FC = () => {
  const { questionNumber, questions, userAnswers, checkAnswer} = useAppStore();
  const question = questions[questionNumber].question;
  const answers= questions[questionNumber].answers;
  const userAnswer = userAnswers ? userAnswers[questionNumber] : undefined;

  return (
    <Card>
      <p className="number">Question: {questionNumber + 1} / 10</p>
      <p>{question}</p>
      {answers.map((answer) => (
        <button
          key={answer}
          disabled={userAnswer ? true : false}
          value={answer}
          onClick={checkAnswer}
        >
          <span>{answer}</span>
          {console.log(question)}
        </button>
      ))}
    </Card>
  );
};

export default Questions;
