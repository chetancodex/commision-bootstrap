import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffilateMarketingHeroWrapperComponent } from './affilate-marketing-hero-wrapper.component';

describe('AffilateMarketingHeroWrapperComponent', () => {
  let component: AffilateMarketingHeroWrapperComponent;
  let fixture: ComponentFixture<AffilateMarketingHeroWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffilateMarketingHeroWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffilateMarketingHeroWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
