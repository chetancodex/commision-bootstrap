import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelieveSectionComponent } from './believe-section.component';

describe('BelieveSectionComponent', () => {
  let component: BelieveSectionComponent;
  let fixture: ComponentFixture<BelieveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelieveSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelieveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
