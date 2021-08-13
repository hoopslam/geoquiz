import { useAppStore } from "../store/store"
import { SummaryWrapper } from "../styles/Summary.style";

const Summary = () => {
    const { userAnswers, score, time } = useAppStore();
    return (
        <SummaryWrapper>
            <h2>Summary</h2>
            <p>Your score: {score} / 10</p>
            <p>Your time: {time}</p>
            {userAnswers.map((question, i) => (
              <div className={`question ${question.isCorrect ? "correct": "incorrect"}`} key={i}>
                <p>Question {i + 1}</p>
                <p dangerouslySetInnerHTML={{__html: question.question}}/>
                <p>Your Answer: <span dangerouslySetInnerHTML={{__html: question.userAnswer}}/></p>
                <p>Correct Answer: <span dangerouslySetInnerHTML={{__html: question.correctAnswer}}/></p>
            </div>  
            ))}
        </SummaryWrapper>
    )
}

export default Summary
