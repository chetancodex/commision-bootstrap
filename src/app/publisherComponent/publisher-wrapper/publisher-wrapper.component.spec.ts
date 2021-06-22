import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherWrapperComponent } from './publisher-wrapper.component';

describe('PublisherWrapperComponent', () => {
  let component: PublisherWrapperComponent;
  let fixture: ComponentFixture<PublisherWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
