import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KwangaApparelPageRoutingModule } from './kwanga-apparel-routing.module';

import { KwangaApparelPage } from './kwanga-apparel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KwangaApparelPageRoutingModule
  ],
  declarations: [KwangaApparelPage]
})
export class KwangaApparelPageModule {}
