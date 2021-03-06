import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { NotificationsService } from './services/notifications.service';
//import { File, File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // dbUser = firebase.firestore().collection("userProfile");
  constructor(
    private platform: Platform,
    private screenOrientation: ScreenOrientation,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private router: Router, private notificationsService: NotificationsService
  ) {
    firebase.initializeApp(firebaseConfig);
    //this.initializeApp();
  }
  // async ngOnInit() {
  //   firebase.initializeApp(environment.firebase);
  //   //firebase.initializeApp(firebaseConfig);
  //  // await this.notificationsService.init();
  // }
  ngAfterViewInit() {
    this.platform.ready().then(async () => {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.statusBar.backgroundColorByHexString('#000324');
      this.statusBar.styleLightContent();
      // await this.notificationsService.requestPermission();
      //this.checkUser();
    });
  }
  // console.log("UID ", firebase.auth().currentUser.uid)

  checkUser() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.router.navigateByUrl('home')
          // this.splashScreen.hide();
          // console.log("User..", res.phoneNumber);
        } else {
          this.router.navigateByUrl('login')
        }
      })
    }, 0);

  }
  //  initializeApp() {
  //     this.platform.ready().then(() => { 
  //       this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  //       this.statusBar.backgroundColorByHexString('#000324');
  //       this.statusBar.styleLightContent();
  //     });
  //   } 
}
