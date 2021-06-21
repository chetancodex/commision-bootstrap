import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepByStepProcessComponent } from './step-by-step-process.component';

describe('StepByStepProcessComponent', () => {
  let component: StepByStepProcessComponent;
  let fixture: ComponentFixture<StepByStepProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepByStepProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepByStepProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
