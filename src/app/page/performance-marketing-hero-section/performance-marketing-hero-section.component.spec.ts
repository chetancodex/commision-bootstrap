import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMarketingHeroSectionComponent } from './performance-marketing-hero-section.component';

describe('PerformanceMarketingHeroSectionComponent', () => {
  let component: PerformanceMarketingHeroSectionComponent;
  let fixture: ComponentFixture<PerformanceMarketingHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceMarketingHeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceMarketingHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
