// rondas de preguntas y respuestas
// ================================

import { answersElements, questionElement } from './dom';
import { QUESTIONS } from './questions';
import { checkAnswers } from './results';

export const answers = [];
let round = 0;

// cambiar de pregunta
const nextQuestion = () => {
	const questionData = QUESTIONS[round];
	const answerElement = [...answersElements.children];

	questionElement.textContent = questionData.question;

	answerElement.forEach((answer, index) => {
		answer.textContent = questionData.options[index];
	});
};

// guardar la respuesta
export const answerClicked = event => {
	if (!event.target.classList.contains('answer')) return;

	answers.push(event.target.textContent);
	round++;

	if (round < QUESTIONS.length) {
		nextQuestion();
	} else {
		checkAnswers();
	}
};
