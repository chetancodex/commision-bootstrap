import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCenterTextComponent } from './offers-center-text.component';

describe('OffersCenterTextComponent', () => {
  let component: OffersCenterTextComponent;
  let fixture: ComponentFixture<OffersCenterTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersCenterTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersCenterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
