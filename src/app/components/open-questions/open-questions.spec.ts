import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenQuestions } from './open-questions';

describe('OpenQuestions', () => {
  let component: OpenQuestions;
  let fixture: ComponentFixture<OpenQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
