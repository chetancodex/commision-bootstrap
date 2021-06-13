import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVisionPageComponent } from './our-vision-page.component';

describe('OurVisionPageComponent', () => {
  let component: OurVisionPageComponent;
  let fixture: ComponentFixture<OurVisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurVisionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurVisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
