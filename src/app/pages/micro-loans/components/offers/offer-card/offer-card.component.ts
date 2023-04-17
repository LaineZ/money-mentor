import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OfferCard } from '../entities/offer-card';

@Component({
  selector: 'app-offer-cards',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent implements OnInit, OnChanges {
  title = 'money-mentor-project';
  shown: boolean[] = [];
  hovered: boolean[] = [];

  @Input() offers: OfferCard[];
  firstPortionOffers: OfferCard[];
  secondPortionOffers: OfferCard[];
  innerWidth: number

  constructor(private cdRef: ChangeDetectorRef) {

  }

  isMobile() {
    return this.innerWidth < 500;
  }

  recomputeSize() {
    for (let index = 0; index < this.shown.length; index++) {
      this.shown[index] = !this.isMobile();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.recomputeSize();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['offers']) {
      this.firstPortionOffers = changes['offers'].currentValue.slice(0, 9);
      this.secondPortionOffers = changes['offers'].currentValue.slice(9);
      this.shown = new Array(this.offers.length).fill(true);
      this.hovered = new Array(this.offers.length).fill(false);
      this.cdRef.detectChanges();
    }
  }

  needsHovering(idx: number) {
    if (this.isMobile()) {
      return this.shown[idx];
    } else {
      return this.hovered[idx];
    }
  }

  ngOnInit() {
    this.firstPortionOffers = this.offers.slice(0, 9);
    this.secondPortionOffers = this.offers.slice(9);
    this.innerWidth = window.innerWidth;
    this.recomputeSize();
  }

  changeState(idx: number) {
    this.shown[idx] = !this.shown[idx];
  }
}
