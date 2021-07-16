import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMarketingComponent } from './performance-marketing.component';

describe('PerformanceMarketingComponent', () => {
  let component: PerformanceMarketingComponent;
  let fixture: ComponentFixture<PerformanceMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
