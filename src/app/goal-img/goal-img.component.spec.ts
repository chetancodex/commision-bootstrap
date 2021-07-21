import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalImgComponent } from './goal-img.component';

describe('GoalImgComponent', () => {
  let component: GoalImgComponent;
  let fixture: ComponentFixture<GoalImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
