import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureImgComponent } from './structure-img.component';

describe('StructureImgComponent', () => {
  let component: StructureImgComponent;
  let fixture: ComponentFixture<StructureImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
