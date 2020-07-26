import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HommyRepublicPage } from './hommy-republic.page';

const routes: Routes = [
  {
    path: '',
    component: HommyRepublicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HommyRepublicPageRoutingModule {}
