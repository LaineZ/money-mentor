import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MicroLoansPage} from './micro-loans.page';
import {HeroComponent} from './components/hero/hero.component';
import {MainSearchComponent} from './components/hero/main-search/main-search.component';
import {SwiperModule} from 'swiper/angular';
import {OffersComponent} from './components/offers/offers.component';
import {SliderComponent} from './components/slider/slider.component';
import {OfferssListComponent} from './components/offers/offerss-list/offerss-list.component';
import {OfferCardComponent} from './components/offers/offer-card/offer-card.component';
import {MonthlyOffersComponent} from './components/monthly-offers/monthly-offers.component';
import {AdditionalInfoComponent} from './components/additional-info/additional-info.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {TableLoansComponent} from './components/table-loans/table-loans.component';
import {HeaderComponent} from './components/header/header.component';
import {ButtonswiperComponent} from './components/buttonswiper/buttonswiper.component';
import {RangeswiperComponent} from './components/rangeswiper/rangeswiper.component';
import {FormsModule} from '@angular/forms';


const components = [HeroComponent, MicroLoansPage, SliderComponent, MainSearchComponent, OffersComponent, OfferssListComponent, OfferCardComponent, MonthlyOffersComponent, AdditionalInfoComponent, TableLoansComponent, HeaderComponent, ButtonswiperComponent, RangeswiperComponent]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    MatExpansionModule,
    FormsModule
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: []
})
export class MicroLoansModule {
}
