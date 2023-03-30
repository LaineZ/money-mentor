import {Component, Input, OnInit} from '@angular/core';
import {OfferCard} from '../entities/offer-card';

@Component({
  selector: 'app-offer-cards',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {
  title = 'money-mentor-project';

  @Input() offers: OfferCard[];

  firstPortionOffers: OfferCard[];
  secondPortionOffers: OfferCard[];

  constructor() {

  }

  ngOnInit() {
    this.firstPortionOffers = this.offers?.slice(0, 9)
    this.secondPortionOffers = this.offers?.slice(9)
  }
}
