import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingQuestions } from './coding-questions';

describe('CodingQuestions', () => {
  let component: CodingQuestions;
  let fixture: ComponentFixture<CodingQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
