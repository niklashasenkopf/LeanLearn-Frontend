import {CodingQuestionControllerService, CodingQuestionDTO} from '../../shared/lean-learn-api';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {mockCodingExercise} from '../mockData';

export interface CodingExerciseState {
  currentQuestion: CodingQuestionDTO | null;
  isLoading: boolean
}

@Injectable({ providedIn: 'root'})
export class CodingQuestionFacadeService {
  private readonly initialState: CodingExerciseState = {
    currentQuestion: null,
    isLoading: false
  }

  private state$ = new BehaviorSubject<CodingExerciseState>(this.initialState);

  readonly vm$ = this.state$.asObservable();

  constructor(
    private codingExerciseService: CodingQuestionControllerService
  ) {
    this.loadMockData()
  }

  loadMockData() {
    this.patchState({
      currentQuestion: mockCodingExercise
    })
  }

  generateQuestion(file: File):void {
    this.patchState({
      isLoading: true
    })

    this.codingExerciseService.generateCodingExerciseForFile(file).subscribe({
      next: value => this.patchState({
        currentQuestion: value
      }),
      error: value => console.error(value),
      complete: () => this.patchState({ isLoading: false})
    })
  }

  private patchState(partial: Partial<CodingExerciseState>) {
    this.state$.next({...this.state$.value, ...partial});
  }

  readonly currentQuestion$: Observable<CodingQuestionDTO | null> = this.vm$.pipe(
    map((vm) => vm.currentQuestion)
  )
}
