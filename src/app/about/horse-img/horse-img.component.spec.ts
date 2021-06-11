import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseImgComponent } from './horse-img.component';

describe('HorseImgComponent', () => {
  let component: HorseImgComponent;
  let fixture: ComponentFixture<HorseImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
