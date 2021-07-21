import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersHeroSectionComponent } from './offers-hero-section.component';

describe('OffersHeroSectionComponent', () => {
  let component: OffersHeroSectionComponent;
  let fixture: ComponentFixture<OffersHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersHeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
