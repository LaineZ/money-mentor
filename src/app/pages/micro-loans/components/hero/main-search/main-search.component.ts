import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Offers} from '../../../services/offers';
import {OfferCard} from '../../offers/entities/offer-card';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSearchComponent {
  title = 'money-mentor-project';
  offers: OfferCard[];
  authenticOffersList: OfferCard[];
  loanSum: number;
  innerWidth: any;

  constructor(private offersService: Offers, private cdRef: ChangeDetectorRef,) {
  }

  ngOnInit() {
    this.offers = this.offersService.getAllOffers();
    this.authenticOffersList = this.offersService.getAllOffers();
    this.innerWidth = window.innerWidth;
  }

  filerOffersBySumm() {
    if (this.loanSum) {
      this.offers = this.authenticOffersList.filter(offer => offer.minSumNum >= this.loanSum && offer.maxSumNum <= this.loanSum);
      this.cdRef.detectChanges();
    }
  }

}
