import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroLoansModule } from './pages/micro-loans/micro-loans.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Offers} from './pages/micro-loans/services/offers';
import {Test} from './pages/test/test';

@NgModule({
  declarations: [
    AppComponent,
    Test
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MicroLoansModule,
    BrowserAnimationsModule
  ],
  providers: [Offers],
  bootstrap: [AppComponent]
})
export class AppModule { }
