/*
LÓGICA
======

- tengo que saber en qué pregunta estoy,
    o ir almacenando las respuestas en un array para compararlas luego
- comienzo con la primera pregunta
- hago click en UNA DE LAS CUATRO RESPUESTAS
- guardo la respuesta que es
- desaparece la primera pregunta
- aparece la segunda pregunta y vuelvo a hacer click
- { bucle hasta llegar a la última pregunta }

- al llegar a la última pregunta
- listado con las respuestas correctas e incorrectas
*/

import { QUESTIONS } from './questions';

// DOM
// ===

// las respuestas las puedo comparar y saber solo usando el textcontent
const questionElement = document.getElementById('question');
const answersElements = document.getElementById('answers');

// VARIABLES
// =========

const answers = [];
let round = 0;

// FUNCIONES
// =========

// comprobar las respuestas
const checkAnswers = () => {
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
const answerClicked = event => {
	if (!event.target.classList.contains('answer')) return;

	answers.push(event.target.textContent);
	console.log(answers);
	round++;

	if (round < QUESTIONS.length) {
		nextQuestion();
	} else {
		checkAnswers();
	}
};

// EVENTOS
// =======
answersElements.addEventListener('click', answerClicked);
