import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqHeroSectionComponent } from './faq-hero-section.component';

describe('FaqHeroSectionComponent', () => {
  let component: FaqHeroSectionComponent;
  let fixture: ComponentFixture<FaqHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqHeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
