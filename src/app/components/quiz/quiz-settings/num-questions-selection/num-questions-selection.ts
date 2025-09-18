import { Component } from '@angular/core';
import {QuizSettingsFacadeService} from '../quiz-settings-facade.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-num-questions-selection',
  imports: [
    AsyncPipe
  ],
  templateUrl: './num-questions-selection.html',
  styleUrl: './num-questions-selection.css'
})
export class NumQuestionsSelection {



  constructor(protected quizSettingsFacade: QuizSettingsFacadeService) {}

  increment():void {
    this.quizSettingsFacade.incrementNumQuestions()
  }

  decrement():void {
    this.quizSettingsFacade.decrementNumQuestions()
  }

}
