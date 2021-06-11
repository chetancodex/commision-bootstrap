import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffilateMarketingComponent } from './affilate-marketing.component';

describe('AffilateMarketingComponent', () => {
  let component: AffilateMarketingComponent;
  let fixture: ComponentFixture<AffilateMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffilateMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffilateMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
