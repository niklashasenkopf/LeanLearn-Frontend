import { Component } from '@angular/core';
import {Difficulty, QuizSettingsFacadeService} from '../quiz-settings-facade.service';

@Component({
  selector: 'app-difficulty-selection',
  imports: [],
  templateUrl: './difficulty-selection.html',
  styleUrl: './difficulty-selection.css'
})
export class DifficultySelection {
  constructor(protected quizSettingsFacade: QuizSettingsFacadeService) {}

  protected readonly Difficulty = Difficulty;
}
