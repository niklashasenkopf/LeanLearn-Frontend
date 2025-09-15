import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerPanel } from './question-answer-panel';

describe('QuestionAnswerPanel', () => {
  let component: QuestionAnswerPanel;
  let fixture: ComponentFixture<QuestionAnswerPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionAnswerPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAnswerPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
