import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffilateMarketingHeroComponent } from './affilate-marketing-hero.component';

describe('AffilateMarketingHeroComponent', () => {
  let component: AffilateMarketingHeroComponent;
  let fixture: ComponentFixture<AffilateMarketingHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffilateMarketingHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffilateMarketingHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
