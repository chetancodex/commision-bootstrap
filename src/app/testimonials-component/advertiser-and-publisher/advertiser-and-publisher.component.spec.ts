import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiserAndPublisherComponent } from './advertiser-and-publisher.component';

describe('AdvertiserAndPublisherComponent', () => {
  let component: AdvertiserAndPublisherComponent;
  let fixture: ComponentFixture<AdvertiserAndPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertiserAndPublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserAndPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
