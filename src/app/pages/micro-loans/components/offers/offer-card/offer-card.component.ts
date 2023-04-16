import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OfferCard } from '../entities/offer-card';

@Component({
  selector: 'app-offer-cards',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent implements OnInit, OnChanges {
  title = 'money-mentor-project';

  @Input() offers: OfferCard[];
  firstPortionOffers: OfferCard[];
  secondPortionOffers: OfferCard[];

  constructor(private cdRef: ChangeDetectorRef) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['offers']) {
      this.firstPortionOffers = changes['offers'].currentValue.slice(0, 9);
      this.secondPortionOffers = changes['offers'].currentValue.slice(9);
      this.cdRef.detectChanges();
    }
  }

  ngOnInit() {
    this.firstPortionOffers = this.offers.slice(0, 9);
    this.secondPortionOffers = this.offers.slice(9);
  }
}
