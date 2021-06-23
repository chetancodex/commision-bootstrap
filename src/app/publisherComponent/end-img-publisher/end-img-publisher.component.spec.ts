import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndImgPublisherComponent } from './end-img-publisher.component';

describe('EndImgPublisherComponent', () => {
  let component: EndImgPublisherComponent;
  let fixture: ComponentFixture<EndImgPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndImgPublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndImgPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
