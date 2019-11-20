import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KwangaApparelPage } from './kwanga-apparel.page';

const routes: Routes = [
  {
    path: '',
    component: KwangaApparelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KwangaApparelPageRoutingModule {}
