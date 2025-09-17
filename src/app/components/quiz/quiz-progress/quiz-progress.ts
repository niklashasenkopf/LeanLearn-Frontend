import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {QuestionState, QuizFacadeService} from '../quiz-facade.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-quiz-progress',
  imports: [
    AsyncPipe
  ],
  templateUrl: './quiz-progress.html',
  styleUrl: './quiz-progress.css'
})
export class QuizProgress implements OnInit{

  questionState$: Observable<QuestionState> | undefined;

  constructor(protected quizFacade: QuizFacadeService) {}

  ngOnInit() {
    this.questionState$ = this.quizFacade.vm$;
  }

}
