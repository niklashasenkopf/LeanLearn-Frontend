import {Injectable} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
  EXTREME = "EXTREME"
}

export interface GenerationSettingsState {
  difficulty: Difficulty,
  numQuestions: number
}

@Injectable({ providedIn: "root" })
export class QuizSettingsFacadeService {
  private readonly initialState: GenerationSettingsState = {
    difficulty: Difficulty.EASY,
    numQuestions: 5
  }

  private state$ = new BehaviorSubject<GenerationSettingsState>(this.initialState);

  readonly vm$ = this.state$.asObservable();

  readonly numQuestions$ = this.vm$.pipe(map(vm => vm.numQuestions))

  get currentDifficulty(): Difficulty {
    return this.state$.value.difficulty;
  }

  get currentNumQuestions(): number {
    return this.state$.value.numQuestions;
  }

  changeDifficulty(newDifficulty: Difficulty): void {
    this.patchState({ difficulty: newDifficulty});
  }

  incrementNumQuestions(): void {
    const current = this.state$.value.numQuestions;
    if(current < 10) {
      this.patchState({ numQuestions: current + 1});
    }
  }

  decrementNumQuestions(): void {
    const current = this.state$.value.numQuestions;
    if(current > 1) {
      this.patchState({ numQuestions: current - 1});
    }
  }

  private patchState(partial: Partial<GenerationSettingsState>) {
    this.state$.next({...this.state$.value, ...partial});
  }
}
