import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffilateMarketingPageComponent } from './affilate-marketing-page.component';

describe('AffilateMarketingPageComponent', () => {
  let component: AffilateMarketingPageComponent;
  let fixture: ComponentFixture<AffilateMarketingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffilateMarketingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffilateMarketingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
