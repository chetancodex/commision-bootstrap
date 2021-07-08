import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherHandComponent } from './publisher-hand.component';

describe('PublisherHandComponent', () => {
  let component: PublisherHandComponent;
  let fixture: ComponentFixture<PublisherHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherHandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
