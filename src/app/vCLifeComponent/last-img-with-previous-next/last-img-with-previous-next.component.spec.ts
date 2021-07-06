import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastImgWithPreviousNextComponent } from './last-img-with-previous-next.component';

describe('LastImgWithPreviousNextComponent', () => {
  let component: LastImgWithPreviousNextComponent;
  let fixture: ComponentFixture<LastImgWithPreviousNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastImgWithPreviousNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastImgWithPreviousNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
