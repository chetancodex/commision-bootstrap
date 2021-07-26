import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCardSectionComponent } from './offers-card-section.component';

describe('OffersCardSectionComponent', () => {
  let component: OffersCardSectionComponent;
  let fixture: ComponentFixture<OffersCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersCardSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
