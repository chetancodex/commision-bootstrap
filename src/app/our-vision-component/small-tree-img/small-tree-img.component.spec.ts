import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTreeImgComponent } from './small-tree-img.component';

describe('SmallTreeImgComponent', () => {
  let component: SmallTreeImgComponent;
  let fixture: ComponentFixture<SmallTreeImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallTreeImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallTreeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
