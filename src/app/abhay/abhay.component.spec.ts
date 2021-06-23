import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhayComponent } from './abhay.component';

describe('AbhayComponent', () => {
  let component: AbhayComponent;
  let fixture: ComponentFixture<AbhayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
