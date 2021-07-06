import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentHeroComponent } from './payment-hero.component';

describe('PaymentHeroComponent', () => {
  let component: PaymentHeroComponent;
  let fixture: ComponentFixture<PaymentHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
