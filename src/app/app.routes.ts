import { Routes } from '@angular/router';
import {QuizComponent} from './components/quiz/quiz.component';
import {OpenQuestions} from './components/open-questions/open-questions';
import {CodingQuestions} from './components/coding-questions/coding-questions';

export const routes: Routes = [
  {path: "mcQuestions", component: QuizComponent},
  {path: "openQuestions", component: OpenQuestions},
  {path: "codingQuestions", component: CodingQuestions}
];
