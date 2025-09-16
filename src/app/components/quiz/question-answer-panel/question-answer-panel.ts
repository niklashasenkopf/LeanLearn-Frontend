import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {QuestionState, QuizFacadeService} from '../quiz-facade.service';
import {AsyncPipe} from '@angular/common';
import {MCQuestionDTO} from '../../../shared/lean-learn-api';

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
  currentQuestion$: Observable<MCQuestionDTO | null> | undefined;
  currentQuestionIndex$: Observable<number | null> | undefined;
  currentQuizLength$: Observable<number | undefined> | undefined;
  currentSelection$: Observable<number | null> | undefined;
  isAnswered$: Observable<boolean | null> | undefined;

  constructor(protected quizFacade: QuizFacadeService) {}

  ngOnInit(): void {
    this.vm$ = this.quizFacade.vm$;
    this.currentQuestion$ = this.quizFacade.currentQuestion$;
    this.currentSelection$ = this.quizFacade.currentSelection$;
    this.isAnswered$ = this.quizFacade.isAnswered$;
    this.currentQuestionIndex$ = this.quizFacade.currentQuestionIndex$;
    this.currentQuizLength$ = this.quizFacade.currentQuizLength$;

    // this.quizFacade.loadMockData();
  }
}
