import { AnswerObject, QuestionsProps } from "../types/types";
import { Card } from "../styles/Questions.style";

const Questions: React.FC<QuestionsProps> = ({
  question,
  answers,
  checkAnswer,
  userAnswer,
  questionNumber,
}) => {
  return (
    <Card>
      <p className="number">Question: {questionNumber} / 10</p>
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
