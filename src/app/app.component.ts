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
   // console.log("UID ", firebase.auth().currentUser.uid);
    
  }
  checkUser() {
    //firebase.auth().settings.appVerificationDisabledForTesting = true;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.router.navigateByUrl("home")
        // User is signed in.
       /*  var db = firebase.firestore();
          var docRef = db.collection("userProfile").doc(user.uid);
          docRef.get().then((doc)=> {
             if(doc && doc.exists) {
               this.router.navigateByUrl("home")
             const myData = doc.data();
             const ffname = myData.FirstName;
             const llname = myData.LastName;
             const phonen = myData.PhoneNumber;
        } else {
          this.router.navigateByUrl("login");
        } */
      /*   }).catch((error)=> {
          this.router.navigateByUrl("login");
          console.log("Got an error: ",error);
        }); */
      } else {
        this.router.navigateByUrl("welcome");
        // No user is signed in.
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
