import {Component, OnInit} from '@angular/core';
import {Offers} from '../../services/offers';
import {OfferCard} from '../offers/entities/offer-card';

@Component({
  selector: 'app-rangeswiper',
  templateUrl: './rangeswiper.component.html',
  styleUrls: ['./rangeswiper.component.scss']
})

export class RangeswiperComponent implements OnInit {
  offers: OfferCard[];

  constructor(private offersService: Offers) {
    window.addEventListener('load', e => {
      var oRange = (document.getElementById('offer-range') as HTMLInputElement)
      var oPanel = (document.getElementById('offer-content') as HTMLInputElement);
      oRange.addEventListener('input', () => {
        let tot = oPanel.scrollWidth - oPanel.offsetWidth;
        let pct = (tot * Number(oRange.value)) / 100;
        oPanel.scrollLeft = pct;
      });
      oPanel.addEventListener('scroll', () => {
        let tot = oPanel.scrollWidth - oPanel.offsetWidth;
        let pct = (oPanel.scrollLeft / tot) * 100;
        oRange.value = String(pct);
      });
    })
  }

  ngOnInit() {
    this.offers = this.offersService.getZeroBifOffers();
  }

}
