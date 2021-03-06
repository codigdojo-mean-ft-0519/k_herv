import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonDCComponent } from './washingtondc/washingtondc.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'burbank', component: BurbankComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'sanjose', component: SanJoseComponent },
  { path: 'seattle', component: SeattleComponent },
  { path: 'washingtondc', component: WashingtonDCComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
