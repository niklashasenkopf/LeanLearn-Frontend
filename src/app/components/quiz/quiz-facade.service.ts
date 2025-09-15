import {McQuestionControllerService, MCQuestionDTO} from '../../shared/lean-learn-api';
import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

export interface QuestionState {
  mcQuestion: MCQuestionDTO | null;
  selectedAnswerIndex: number | null;
  answerSubmitted: boolean;
  isLoading: boolean;
}

@Injectable({ providedIn: 'root'})
export class QuizFacadeService {
  private readonly initialState: QuestionState = {
    mcQuestion: null,
    selectedAnswerIndex: null,
    answerSubmitted: false,
    isLoading: false
  }

  private state$ = new BehaviorSubject<QuestionState>(this.initialState);

  readonly vm$ = this.state$.asObservable();

  constructor(private mcQuestionService: McQuestionControllerService) {}

  generateQuestion(file: File):void {

    this.patchState({
      isLoading: true,
      answerSubmitted: false,
      selectedAnswerIndex: null
    })

    this.mcQuestionService.generateQuestionForFile(file).subscribe({
        next: value => this.patchState({ mcQuestion: value}),
        error: value => console.log(value),
        complete: () => this.patchState({ isLoading: false})
      }
    )
  }

  selectAnswer(index: number) {
    const current = this.state$.value;
    if(current.answerSubmitted) {
      return;
    }
    this.patchState({ selectedAnswerIndex: index})
  }

  submitAnswer() {
    this.patchState({ answerSubmitted: true });
  }

  private patchState(partial: Partial<QuestionState>) {
    this.state$.next({...this.state$.value, ...partial});
  }

}
