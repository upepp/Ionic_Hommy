import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepublicPagePage } from './republic-page.page';

const routes: Routes = [
  {
    path: '',
    component: RepublicPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepublicPagePageRoutingModule {}
