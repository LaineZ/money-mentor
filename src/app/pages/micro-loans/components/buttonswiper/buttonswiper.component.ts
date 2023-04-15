import { Component } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import {ViewChild} from '@angular/core';
import SwiperCore, { Swiper, Virtual } from 'swiper';
// install Swiper modules
SwiperCore.use([Virtual]);
@Component({
  template: `
    <swiper #swiper [virtual]="true">
      <ng-template swiperSlide>Slide 1</ng-template>
      <ng-template swiperSlide>Slide 2</ng-template>
      <ng-template swiperSlide>Slide 3</ng-template>
      <ng-template swiperSlide>Slide 4</ng-template>
      <ng-template swiperSlide>Slide 5</ng-template>
      <ng-template swiperSlide>Slide 6</ng-template>
      <ng-template swiperSlide>Slide 7</ng-template>
    </swiper>
    <button (click)="slideNext()">Next slide</button>
    <button (click)="slidePrev()">Prev slide</button>
  `,
  selector: 'app-buttonswiper',
  templateUrl: './buttonswiper.component.html',
  styleUrls: ['./buttonswiper.component.css', "../../../../../../node_modules/swiper/swiper-bundle.css"]
})
export class ButtonswiperComponent {
  @ViewChild( Swiper ) Swiper!: ButtonswiperComponent;
  slideNext(){
    this.Swiper.slideNext();
  }
  slidePrev(){
    this.Swiper.slidePrev();
  }
}
