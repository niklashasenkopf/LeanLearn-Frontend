import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumQuestionsSelection } from './num-questions-selection';

describe('NumQuestionsSelection', () => {
  let component: NumQuestionsSelection;
  let fixture: ComponentFixture<NumQuestionsSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumQuestionsSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumQuestionsSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
