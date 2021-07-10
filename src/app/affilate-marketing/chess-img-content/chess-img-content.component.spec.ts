import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessImgContentComponent } from './chess-img-content.component';

describe('ChessImgContentComponent', () => {
  let component: ChessImgContentComponent;
  let fixture: ComponentFixture<ChessImgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessImgContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessImgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
