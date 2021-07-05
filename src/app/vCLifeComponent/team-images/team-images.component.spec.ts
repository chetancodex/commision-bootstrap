import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamImagesComponent } from './team-images.component';

describe('TeamImagesComponent', () => {
  let component: TeamImagesComponent;
  let fixture: ComponentFixture<TeamImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
