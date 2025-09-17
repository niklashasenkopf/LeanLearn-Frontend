import { Component } from '@angular/core';
import {DifficultySelection} from './difficulty-selection/difficulty-selection';

@Component({
  selector: 'app-quiz-settings',
  imports: [
    DifficultySelection
  ],
  templateUrl: './quiz-settings.html',
  styleUrl: './quiz-settings.css'
})
export class QuizSettings {

  isExpanded: boolean = false;

  toggleExpanded():void {
    this.isExpanded = !this.isExpanded;
  }

}
