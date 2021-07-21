import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultImgComponent } from './result-img.component';

describe('ResultImgComponent', () => {
  let component: ResultImgComponent;
  let fixture: ComponentFixture<ResultImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
