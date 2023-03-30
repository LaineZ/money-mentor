import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TableData} from './entities/table-data';
import {OfferCard} from '../offers/entities/offer-card';
import {Offers} from '../../services/offers';

@Component({
  selector: 'app-table-loans',
  templateUrl: './table-loans.component.html',
  styleUrls: ['./table-loans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableLoansComponent {

  tableData: OfferCard[];

  constructor(private offersService: Offers) {
  }

  ngOnInit() {
    this.tableData = this.offersService.getSpecialOffers();
  }
}
