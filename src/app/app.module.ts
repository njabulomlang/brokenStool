import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard'
import { CartModalPageModule } from './cart-modal/cart-modal.module';
import { Camera } from '@ionic-native/camera/ngx';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
import { IonicSelectableModule } from 'ionic-selectable';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { Network } from '@ionic-native/network/ngx'
//import { OrderHistoryPage } from './order-history/order-history.page';

@NgModule({
  declarations: [
    AppComponent,
    //OrderHistoryPage
  ],
  entryComponents: [],
  imports: [BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,IonicSelectableModule, IonicModule.forRoot(), AppRoutingModule,
     CartModalPageModule, 
     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), NgxWebstorageModule.forRoot()],
  providers: [
    StatusBar,
    ScreenOrientation,
    SplashScreen,
    AuthGuard,
    GooglePlus,
    Camera, 
    File,
    FileOpener,
    Downloader,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
