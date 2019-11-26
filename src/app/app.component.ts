import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // dbUser = firebase.firestore().collection("userProfile");
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private router: Router
  ) {
    this.initializeApp();
    firebase.initializeApp(firebaseConfig);
    this.checkUser();
  }
  checkUser() {
    //firebase.auth().settings.appVerificationDisabledForTesting = true;
    firebase.auth().onAuthStateChanged((res) => {
      if (res) {
        this.router.navigateByUrl('view')
        console.log("User..", res.phoneNumber);
      } else {
        this.router.navigateByUrl('login')
      }
    })
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
