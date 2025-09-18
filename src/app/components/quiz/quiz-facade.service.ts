import {McQuestionControllerService, MCQuestionDTO} from '../../shared/lean-learn-api';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {mockMcQuiz} from './mcQuestionMockData';
import {QuizSettingsFacadeService} from './quiz-settings/quiz-settings-facade.service';

export interface QuestionState {
  mcQuestions: Array<MCQuestionDTO> | null;
  currentQuestionIndex: number | null;
  selectedAnswerIndex: Array<number | null> | null;
  answerSubmitted: Array<boolean> | null;
  isLoading: boolean;
}

@Injectable({ providedIn: 'root'})
export class QuizFacadeService {
  private readonly initialState: QuestionState = {
    mcQuestions: null,
    currentQuestionIndex: null,
    selectedAnswerIndex: null,
    answerSubmitted: null,
    isLoading: false
  }

  private state$ = new BehaviorSubject<QuestionState>(this.initialState);

  readonly vm$ = this.state$.asObservable();

  constructor(
    private mcQuestionService: McQuestionControllerService,
    private quizSettingsFacade: QuizSettingsFacadeService
  ) {}

  loadMockData(): void {
    this.patchState({
      mcQuestions: mockMcQuiz.questions,
      currentQuestionIndex: 0,
      selectedAnswerIndex: new Array(mockMcQuiz.questions?.length).fill(null),
      answerSubmitted: new Array(mockMcQuiz.questions?.length).fill(false)
    })
  }

  generateQuiz(file: File):void {

    this.patchState({
      isLoading: true,
    })

    const difficulty = this.quizSettingsFacade.currentDifficulty;
    const numQuestions = this.quizSettingsFacade.currentNumQuestions;

    this.mcQuestionService.generateMcQuizForFile(difficulty, numQuestions, file).subscribe({
        next: value => this.patchState({
          mcQuestions: value.questions,
          currentQuestionIndex: 0,
          answerSubmitted: new Array(value.questions?.length).fill(false),
          selectedAnswerIndex: new Array(value.questions?.length).fill(null)
        }),
        error: value => console.log(value),
        complete: () => this.patchState({ isLoading: false })
      }
    )
  }

  selectAnswer(index: number) {
    const current = this.state$.value;

    if (
      current.currentQuestionIndex === null ||
      !current.selectedAnswerIndex ||
      !current.answerSubmitted
    ) {
      return;
    }

    const updatedSelections = [...current.selectedAnswerIndex];
    updatedSelections[current.currentQuestionIndex] = index;
    this.patchState({
      selectedAnswerIndex: updatedSelections
    })
  }

  submitAnswer() {
    const current = this.state$.value;
    if (current.currentQuestionIndex === null || !current.answerSubmitted) {
      return;
    }

    const updatedSubmitted = [...current.answerSubmitted];
    updatedSubmitted[current.currentQuestionIndex] = true;

    this.patchState({ answerSubmitted: updatedSubmitted });
  }

  stepIntoNextQuestion(): void {
    const current = this.state$.value;

    if(current.currentQuestionIndex === null) {
      return;
    }

    this.patchState({
      currentQuestionIndex: (current.currentQuestionIndex + 1) % (current.mcQuestions?.length ?? 1)
    })
  }

  stepIntoPreviousQuestion(): void {
    const current = this.state$.value;

    if(current.currentQuestionIndex === null || !current.mcQuestions) {
      return;
    }

    const length = current.mcQuestions.length;

    this.patchState({
      currentQuestionIndex: (current.currentQuestionIndex - 1 + length) % length
    })
  }

  stepToQuestionWithIndex(index: number): void {
    this.patchState({
      currentQuestionIndex: index
    })
  }

  private patchState(partial: Partial<QuestionState>) {
    this.state$.next({...this.state$.value, ...partial});
  }

  answeredQuestion(index: number): boolean {
    const current = this.state$.value;

    return !!(current.answerSubmitted && current.answerSubmitted[index]);
  }

  answeredQuestionCorrect(index: number): boolean {
    const current = this.state$.value;

    if(!current.mcQuestions || !current.selectedAnswerIndex) {
      return false;
    }

    const question = current.mcQuestions[index];
    const selected = current.selectedAnswerIndex[index];

    if(selected === null || selected === undefined) {
      return false
    }

    return question.correctAnswerIndex === selected;
  }

  readonly currentQuestion$: Observable<MCQuestionDTO | null> = this.vm$.pipe(
    map((vm) =>
      vm.mcQuestions && vm.currentQuestionIndex !== null
        ? vm.mcQuestions[vm.currentQuestionIndex]
        : null
    )
  );

  readonly currentQuestionIndex$: Observable<number | null> = this.vm$.pipe(
    map((vm) =>
      vm.currentQuestionIndex
    )
  )

  readonly currentQuizLength$: Observable<number | undefined> = this.vm$.pipe(
    map((vm) =>
      vm.mcQuestions?.length
    )
  )

  readonly currentSelection$: Observable<number | null> = this.vm$.pipe(
    map((vm) =>
      vm.currentQuestionIndex !== null && vm.selectedAnswerIndex
        ? vm.selectedAnswerIndex[vm.currentQuestionIndex]
        : null
    )
  );

  readonly isAnswered$: Observable<boolean> = this.vm$.pipe(
    map((vm) =>
      vm.currentQuestionIndex !== null && vm.answerSubmitted
        ? vm.answerSubmitted[vm.currentQuestionIndex]
        : false
    )
  );



}
