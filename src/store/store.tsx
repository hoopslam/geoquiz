import { observable, toJS } from "mobx";
import { useObserver } from "mobx-react";
import { fetchQuizQuestions } from "../API/API";
import { AnswerObject, QuestionTypes } from "../types/types";
import React from "react";

export interface AppStore {
  loading: boolean;
  questions: QuestionTypes[];
  questionNumber: number;
  userAnswers: AnswerObject[];
  time: number;
  difficulty: string;
  score: number;
  gameOver: boolean;

  startQuiz: () => void;
  addTime: (time: number) => void;
  resetScore: () => void;
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const appStore: AppStore = observable.object({
  loading: false,
  questions: [],
  questionNumber: 0,
  userAnswers: [],
  time: 0,
  timerId: 0,
  difficulty: "easy",
  score: 0,
  gameOver: true,

  async startQuiz() {
    appStore.loading = true;
    appStore.gameOver = false;
    const fetchedData = await fetchQuizQuestions(appStore.difficulty);
    appStore.questions = [...fetchedData];
    appStore.resetScore();
  },
  resetScore() {
    appStore.score = 0;
    appStore.time = 0;
    appStore.userAnswers = [];
    appStore.questionNumber = 0;
    appStore.loading = false;
  },
  addTime(time) {
    appStore.time = time;
  },
  checkAnswer(e) {
    if (!appStore.gameOver) {
      const userAnswer = e.currentTarget.value;
      const isCorrect =
        appStore.questions[appStore.questionNumber].correct_answer ===
        userAnswer;
      isCorrect && appStore.score++;

      const answerObject = {
        question: appStore.questions[appStore.questionNumber].question,
        userAnswer,
        isCorrect,
        correctAnswer:
          appStore.questions[appStore.questionNumber].correct_answer,
      };
      appStore.userAnswers = [...appStore.userAnswers, answerObject];
      if (appStore.questionNumber === 9) {
        appStore.gameOver = true;
      } else {
        appStore.questionNumber++;
      }
    }
  },
  selectDifficulty(e) {
    appStore.difficulty = e.target.value;
  },
} as AppStore);

const useAppStore = () => useObserver(() => toJS(appStore));

export { appStore, useAppStore };
