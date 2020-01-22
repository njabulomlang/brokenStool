import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PendingOrdersPageModule } from '../pending-orders/pending-orders.module';
import { IonicModule } from '@ionic/angular';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { OrderHistoryPageModule} from '../order-history/order-history.module'
import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,PendingOrdersPageModule, OrderHistoryPageModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
