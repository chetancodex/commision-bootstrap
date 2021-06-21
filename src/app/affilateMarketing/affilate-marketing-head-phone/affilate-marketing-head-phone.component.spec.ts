import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffilateMarketingHeadPhoneComponent } from './affilate-marketing-head-phone.component';

describe('AffilateMarketingHeadPhoneComponent', () => {
  let component: AffilateMarketingHeadPhoneComponent;
  let fixture: ComponentFixture<AffilateMarketingHeadPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffilateMarketingHeadPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffilateMarketingHeadPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
