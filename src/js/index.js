import { answersElements } from './dom';
import { answerClicked } from './qa-rounds';

answersElements.addEventListener('click', answerClicked);
