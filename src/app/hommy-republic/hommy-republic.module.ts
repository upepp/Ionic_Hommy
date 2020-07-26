import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HommyRepublicPageRoutingModule } from './hommy-republic-routing.module';

import { HommyRepublicPage } from './hommy-republic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HommyRepublicPageRoutingModule
  ],
  declarations: [HommyRepublicPage]
})
export class HommyRepublicPageModule {}
