import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveAndBeyondComponent } from './above-and-beyond.component';

describe('AboveAndBeyondComponent', () => {
  let component: AboveAndBeyondComponent;
  let fixture: ComponentFixture<AboveAndBeyondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboveAndBeyondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveAndBeyondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
