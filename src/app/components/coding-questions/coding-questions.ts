import {Component, OnInit} from '@angular/core';
import {EditorComponent, MonacoEditorModule} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';
import {CodingQuestionControllerService, CodingQuestionDTO} from '../../shared/lean-learn-api';
import {CodingExerciseState, CodingQuestionFacadeService} from './coding-question-facade.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {LoadingSpinner} from '../../shared/components/loading-spinner/loading-spinner';
import {FileUpload} from '../quiz/file-upload/file-upload';

@Component({
  selector: 'app-coding-questions',
  imports: [
    EditorComponent,
    FormsModule,
    MonacoEditorModule,
    AsyncPipe,
    LoadingSpinner,
    FileUpload
  ],
  templateUrl: './coding-questions.html',
  styleUrl: './coding-questions.css'
})
export class CodingQuestions implements OnInit{
  editorOptions = { theme: 'vs-dark', language: 'java'};
  currentQuestion$: Observable<CodingQuestionDTO | null> | undefined;
  vm$: Observable<CodingExerciseState> | undefined;
  loadingText: string = "Generating a coding exercise..."

  constructor(protected codingQuestionFacadeService: CodingQuestionFacadeService) {}

  ngOnInit() {
    this.vm$ = this.codingQuestionFacadeService.vm$;
    this.currentQuestion$ = this.codingQuestionFacadeService.currentQuestion$
  }

}
