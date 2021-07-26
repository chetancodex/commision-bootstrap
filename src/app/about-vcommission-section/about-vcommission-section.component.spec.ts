import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVcommissionSectionComponent } from './about-vcommission-section.component';

describe('AboutVcommissionSectionComponent', () => {
  let component: AboutVcommissionSectionComponent;
  let fixture: ComponentFixture<AboutVcommissionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVcommissionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVcommissionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
