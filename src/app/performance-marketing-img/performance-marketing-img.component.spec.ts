import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMarketingImgComponent } from './performance-marketing-img.component';

describe('PerformanceMarketingImgComponent', () => {
  let component: PerformanceMarketingImgComponent;
  let fixture: ComponentFixture<PerformanceMarketingImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceMarketingImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceMarketingImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
