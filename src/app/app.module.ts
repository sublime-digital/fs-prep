import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MathStatComponent } from './math-and-stat/math-and-stat.component';
import { StratCommComponent } from './strat-comm/strat-comm.component';
import { USWorldEconomyComponent } from './us-world-economy/us-world-economy.component';
import { GovHistoryComponent } from './gov-and-history/gov-and-history.component';
import { SettingsComponent } from './_settings/_settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MathStatComponent,
    StratCommComponent,
    USWorldEconomyComponent,
    GovHistoryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
