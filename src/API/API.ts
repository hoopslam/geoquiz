import { shuffleArray } from "../utils/utils";

export interface FetchedData {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface QuestionTypes extends FetchedData {  //shuffled data
  answers: string[];
}

export const fetchQuizQuestions = async (difficulty: string) => {
  const endpoint = `https://opentdb.com/api.php?amount=10&category=22&difficulty=${difficulty}&type=multiple`;
  const response = await fetch(endpoint);
  const data = await response.json();

  // shuffle questions and answer into new array and return new data
  return data.results.map((question: FetchedData) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
