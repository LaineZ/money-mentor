import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeswiperComponent } from './rangeswiper.component';

describe('RangeswiperComponent', () => {
  let component: RangeswiperComponent;
  let fixture: ComponentFixture<RangeswiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeswiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeswiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
