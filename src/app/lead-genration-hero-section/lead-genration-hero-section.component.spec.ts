import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGenrationHeroSectionComponent } from './lead-genration-hero-section.component';

describe('LeadGenrationHeroSectionComponent', () => {
  let component: LeadGenrationHeroSectionComponent;
  let fixture: ComponentFixture<LeadGenrationHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadGenrationHeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadGenrationHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
