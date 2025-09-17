import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
  EXTREME = "EXTREME"
}

export interface GenerationSettingsState {
  difficulty: Difficulty
}

@Injectable({ providedIn: "root" })
export class QuizSettingsFacadeService {
  private readonly initialState: GenerationSettingsState = {
    difficulty: Difficulty.EASY
  }

  private state$ = new BehaviorSubject<GenerationSettingsState>(this.initialState);

  readonly vm$ = this.state$.asObservable();

  get currentDifficulty(): Difficulty {
    return this.state$.value.difficulty;
  }

  changeDifficulty(newDifficulty: Difficulty): void {
    this.patchState({ difficulty: newDifficulty});
  }

  private patchState(partial: Partial<GenerationSettingsState>) {
    this.state$.next({...this.state$.value, ...partial});
  }
}
