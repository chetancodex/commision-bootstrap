import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGenrationPageComponent } from './lead-genration-page.component';

describe('LeadGenrationPageComponent', () => {
  let component: LeadGenrationPageComponent;
  let fixture: ComponentFixture<LeadGenrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadGenrationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadGenrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
