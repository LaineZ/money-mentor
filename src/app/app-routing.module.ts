import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicroLoansModule } from './pages/micro-loans/micro-loans.module';
import { MicroLoansPage } from './pages/micro-loans/micro-loans.page';
import {Test} from './pages/test/test';

const routes: Routes = [
  { path: 'micro-loans', component: MicroLoansPage },
    { path: 'test', component: Test },

  { path: '', redirectTo: 'micro-loans', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
