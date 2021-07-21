import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceHeroSectionComponent } from './ecommerce-hero-section.component';

describe('EcommerceHeroSectionComponent', () => {
  let component: EcommerceHeroSectionComponent;
  let fixture: ComponentFixture<EcommerceHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceHeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
