import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPageRoutingModule } from './view-routing.module';

import { ViewPage } from './view.page';
import { PopoverComponent } from '../popover/popover.component';
import { StarRatingModule } from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPageRoutingModule,
    StarRatingModule
  ],
  entryComponents : [PopoverComponent],
  declarations: [ViewPage,PopoverComponent]
})
export class ViewPageModule {}
