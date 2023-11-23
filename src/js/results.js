// resultado final
// ===============

import { answersElements, questionElement } from './dom';
import { answers } from './qa-rounds';
import { QUESTIONS } from './questions';

// comprobar las respuestas
export const checkAnswers = () => {
	const questionContainer = document.getElementById('question-container');

	questionElement.remove();
	answersElements.remove();

	const fragment = document.createDocumentFragment();

	const resultTitle = document.createElement('span');
	resultTitle.textContent = 'Resultado final';
	resultTitle.classList.add('results-title');
	fragment.append(resultTitle);

	answers.forEach((answer, index) => {
		const questionData = QUESTIONS[index];

		const roundQuestion = document.createElement('span');
		roundQuestion.textContent = questionData.question;
		roundQuestion.classList.add('round-question');

		const roundAndUserAnswers = document.createElement('span');
		roundAndUserAnswers.classList.add('round-answers');

		const userAnswer = document.createElement('span');
		userAnswer.textContent = answer;
		answer === questionData.correctAnswer
			? userAnswer.classList.add('correct')
			: userAnswer.classList.add('incorrect');

		roundAndUserAnswers.textContent = `${questionData.correctAnswer} - `;
		roundAndUserAnswers.append(userAnswer);

		fragment.append(roundQuestion, roundAndUserAnswers);
	});

	questionContainer.append(fragment);
};
