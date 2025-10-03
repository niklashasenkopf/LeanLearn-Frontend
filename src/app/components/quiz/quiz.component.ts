import {Component, OnInit} from '@angular/core';
import {LoadingSpinner} from '../../shared/components/loading-spinner/loading-spinner';
import {FileUpload} from './file-upload/file-upload';
import {QuestionAnswerPanel} from './question-answer-panel/question-answer-panel';
import {QuestionState, QuizFacadeService} from './quiz-facade.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {QuizProgress} from './quiz-progress/quiz-progress';
import {QuizSettings} from './quiz-settings/quiz-settings';

@Component({
  selector: 'app-quiz',
  imports: [
    LoadingSpinner,
    FileUpload,
    QuestionAnswerPanel,
    AsyncPipe,
    QuizProgress,
    QuizSettings,
  ],
  providers: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {

  vm$ : Observable<QuestionState> | undefined;
  loadingText: string = "Generating a quiz...";

  constructor(protected quizFacade: QuizFacadeService) {}

  ngOnInit() {
    this.vm$ = this.quizFacade.vm$;
  }

}
