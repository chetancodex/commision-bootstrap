import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPaymentComponent } from './about-payment.component';

describe('AboutPaymentComponent', () => {
  let component: AboutPaymentComponent;
  let fixture: ComponentFixture<AboutPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
