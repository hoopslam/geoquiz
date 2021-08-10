//store
export interface AnswerObject {
  question: string;
  userAnswer: string;
  isCorrect: boolean;
  correctAnswer: string;
}

//Questions component
export interface QuestionsProps {
  question: string;
  answers: string[];
  checkAnswer:  (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
}

//API
export interface FetchedData {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

//API
export interface QuestionTypes extends FetchedData {  //shuffled data
  answers: string[];
}