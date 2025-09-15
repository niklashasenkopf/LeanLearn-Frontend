import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {QuestionState, QuizFacadeService} from '../quiz-facade.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-question-answer-panel',
  imports: [
    AsyncPipe
  ],
  templateUrl: './question-answer-panel.html',
  styleUrl: './question-answer-panel.css'
})
export class QuestionAnswerPanel implements OnInit {

  vm$: Observable<QuestionState> | undefined;

  constructor(protected quizFacade: QuizFacadeService) {}

  ngOnInit(): void {
    this.vm$ = this.quizFacade.vm$;
  }

}
