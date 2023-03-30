import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {OfferCard} from '../entities/offer-card';
import {Offers} from '../../../services/offers';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offerss-list.component.html',
  styleUrls: ['./offerss-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferssListComponent {
  title = 'money-mentor-project';

  offers: OfferCard[]

  constructor(private offersService: Offers,     private cdRef: ChangeDetectorRef, ) {
  }

  ngOnInit() {

    this.offers = this.offersService.getOffersList();
    console.log(this.offers)
    this.cdRef.detectChanges();

  }
}

