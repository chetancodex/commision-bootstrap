import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqImgSectionComponent } from './faq-img-section.component';

describe('FaqImgSectionComponent', () => {
  let component: FaqImgSectionComponent;
  let fixture: ComponentFixture<FaqImgSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqImgSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqImgSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
