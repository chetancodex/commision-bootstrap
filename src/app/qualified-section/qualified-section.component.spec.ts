import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifiedSectionComponent } from './qualified-section.component';

describe('QualifiedSectionComponent', () => {
  let component: QualifiedSectionComponent;
  let fixture: ComponentFixture<QualifiedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifiedSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifiedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
