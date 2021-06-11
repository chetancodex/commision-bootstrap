import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndImgComponent } from './end-img.component';

describe('EndImgComponent', () => {
  let component: EndImgComponent;
  let fixture: ComponentFixture<EndImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
