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

      var styleElement = document.createElement("style");

      if (this.iCheck()) {
        styleElement.appendChild(document.createTextNode("div ::-webkit-scrollbar { display: auto }"));
        oPanel.appendChild(styleElement);
      } else {
        styleElement.appendChild(document.createTextNode("div ::-webkit-scrollbar { display: none }"));
        oPanel.appendChild(styleElement);	
      }
    })
  }

  ngOnInit() {
    this.offers = this.offersService.getZeroBifOffers();
  }


  iCheck(): boolean {
    var userAgent = navigator.userAgent || navigator.vendor;
    return (/iPad|iPhone|iPod/.test(userAgent));
  }

  openLink(index) {
    window.open(this.offers[index].offerUrl, '_blank')?.focus();
  }

}
