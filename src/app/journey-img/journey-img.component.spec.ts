import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyImgComponent } from './journey-img.component';

describe('JourneyImgComponent', () => {
  let component: JourneyImgComponent;
  let fixture: ComponentFixture<JourneyImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
