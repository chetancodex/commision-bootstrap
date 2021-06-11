import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxQualityPerformanceComponent } from './max-quality-performance.component';

describe('MaxQualityPerformanceComponent', () => {
  let component: MaxQualityPerformanceComponent;
  let fixture: ComponentFixture<MaxQualityPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxQualityPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxQualityPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
