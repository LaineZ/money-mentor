import { Component } from '@angular/core';
import {Offers} from '../../services/offers';
import {OfferCard} from '../offers/entities/offer-card';

@Component({
  selector: 'app-hero-loans',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  title = 'money-mentor-project';

  offers: OfferCard[];

  constructor(private offersService: Offers) {
  }

  ngOnInit() {
    this.offers = this.offersService.getAllOffers();
  }

  isMoreOffers = false;
}
