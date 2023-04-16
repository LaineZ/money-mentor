import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { OfferCard } from '../entities/offer-card';
import { Offers } from '../../../services/offers';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offerss-list.component.html',
  styleUrls: ['./offerss-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferssListComponent {
  title = 'money-mentor-project';

  offers: OfferCard[];
  authenticOffersList: OfferCard[];

  @Input() loanSum: number;

  constructor(private offersService: Offers, private cdRef: ChangeDetectorRef,) {
  }

  ngOnInit() {
    this.offers = this.offersService.getOffersList();
    this.authenticOffersList = this.offersService.getAllOffers();
    this.cdRef.detectChanges();
  }

  onLoanSumChanged(loanSum: number): void {
    this.loanSum = loanSum;
    if (loanSum == 0) {
      this.offers = this.offersService.getOffersList();
    } else {
      this.offers = this.authenticOffersList.filter(offer => offer.minSumNum <= this.loanSum && offer.maxSumNum >= this.loanSum);
    }
    this.cdRef.markForCheck();
  }
}

