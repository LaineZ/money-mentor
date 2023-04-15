import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonswiperComponent } from './buttonswiper.component';

describe('ButtonswiperComponent', () => {
  let component: ButtonswiperComponent;
  let fixture: ComponentFixture<ButtonswiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonswiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonswiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
