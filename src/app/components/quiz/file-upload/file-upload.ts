import {Component, OnInit} from '@angular/core';
import {QuestionState, QuizFacadeService} from '../quiz-facade.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-file-upload',
  imports: [
    AsyncPipe
  ],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css'
})
export class FileUpload implements OnInit {

  selectedFile: File | undefined;
  vm$: Observable<QuestionState> | undefined;

  constructor(protected quizFacade: QuizFacadeService) {}

  ngOnInit() {
    this.vm$ = this.quizFacade.vm$;
  }

  onGenerateQuestion() {
    if(!this.selectedFile) {
      return;
    }

    this.quizFacade.generateQuestion(this.selectedFile)
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0){
      this.selectedFile = input.files[0];
    }
  }

}
