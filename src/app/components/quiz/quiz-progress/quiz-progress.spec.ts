import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProgress } from './quiz-progress';

describe('QuizProgress', () => {
  let component: QuizProgress;
  let fixture: ComponentFixture<QuizProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
