import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MathStatComponent } from './math-and-stat/math-and-stat.component';
import { StratCommComponent } from './strat-comm/strat-comm.component';
import { USWorldEconomyComponent } from './us-world-economy/us-world-economy.component';
import { GovHistoryComponent } from './gov-and-history/gov-and-history.component';
import { SettingsComponent } from './_settings/_settings.component';

const routes: Routes = [
  { path: '',   redirectTo: 'mathstat', pathMatch: 'full' },
  { path: 'mathstat', component: MathStatComponent },
  { path: 'stratcomm', component: StratCommComponent },
  { path: 'usworldeconomy', component: USWorldEconomyComponent },
  { path: 'govhistory', component: GovHistoryComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
