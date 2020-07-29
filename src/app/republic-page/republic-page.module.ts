import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepublicPagePageRoutingModule } from './republic-page-routing.module';

import { RepublicPagePage } from './republic-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepublicPagePageRoutingModule
  ],
  declarations: [RepublicPagePage]
})
export class RepublicPagePageModule {}
