import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard'
import { Facebook } from '@ionic-native/facebook/ngx';
import { CartModalPageModule } from './cart-modal/cart-modal.module';
import { Camera } from '@ionic-native/camera/ngx';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
import { PopoverComponent } from './popover/popover.component';
import { StarRatingModule } from 'ionic4-star-rating';
//import { ProductPipe } from './pipes/product.pipe';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,FormsModule,IonicSelectableModule, IonicModule.forRoot(), AppRoutingModule,
   
     CartModalPageModule],
  providers: [
    StatusBar,
    ScreenOrientation,
    SplashScreen,
    AuthGuard,
    Facebook,
    Camera, 
    File,
    FileOpener,
    Downloader,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
