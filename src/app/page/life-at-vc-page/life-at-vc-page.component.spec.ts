import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtVcPageComponent } from './life-at-vc-page.component';

describe('LifeAtVcPageComponent', () => {
  let component: LifeAtVcPageComponent;
  let fixture: ComponentFixture<LifeAtVcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeAtVcPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeAtVcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
