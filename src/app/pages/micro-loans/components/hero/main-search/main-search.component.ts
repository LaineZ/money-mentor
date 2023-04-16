import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Offers} from '../../../services/offers';
import {OfferCard} from '../../offers/entities/offer-card';
import { OfferCardComponent } from '../../offers/offer-card/offer-card.component';

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
  @Output() loanSumChanged = new EventEmitter<number>();
  innerWidth: any;

  onSearch(): void {
    if (this.loanSum) {
      this.cdRef.detectChanges();
      this.loanSumChanged.emit(this.loanSum);
    } else {
      this.loanSumChanged.emit(0);
    }
  }

  computeResultsCount() {
    if (this.loanSum) {
      this.offers = this.authenticOffersList.filter(offer => offer.minSumNum <= this.loanSum && offer.maxSumNum >= this.loanSum);
    } else {
      this.offers = this.authenticOffersList;
    }
  }

  constructor(private offersService: Offers, private cdRef: ChangeDetectorRef,) {
  }

  ngOnInit() {
    this.offers = this.offersService.getAllOffers();
    this.authenticOffersList = this.offersService.getAllOffers();
    this.innerWidth = window.innerWidth;
  }
}
