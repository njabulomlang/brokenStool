import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { IonSlides, AlertController } from '@ionic/angular';
import { FacebookLoginResponse, Facebook } from '@ionic-native/facebook/ngx';

declare var window;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // email;
  @ViewChild("slides", { static: true }) slides: IonSlides
  password;
  email;
  number: string;
  verification = "";
  confirmationResult = '';
  loaderMessages = 'Loading...';
  loaderAnimate:boolean;
  constructor(private router: Router, private alertController: AlertController, private authService: AuthService,
    public fb: Facebook) {

  }

  ngOnInit() {
    /*     setTimeout(() => {
          this.slides.lockSwipes(true);  
        }, 1000); */
  }
  goSignUp() {
    this.router.navigateByUrl("/signup")
  }
  /* login() {
    // this.number = this.registrationForm.get('number').value
    //this.password = this.registrationForm.get('password').value
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback':  (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
      }

    });
    console.log(window.recaptchaVerifier);

  } */
  requestCode() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    console.log(window.recaptchaVerifier);
    let appVerifier = window.recaptchaVerifier
    return this.authService.requestLogin(this.number, appVerifier)
  }
  login(code) {
    if (this.confirmationResult !== '') {
      //var code = this.inputCode
      return this.authService.login(code, this.confirmationResult).then(result => {
        console.log(result);
      })
    }
  }

  addUser() {
    this.loaderAnimate = true;
    setTimeout(() => {
      this.loaderAnimate = false;
    }, 2000);
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        console.log('yeah yeah yeah');
      },
      'expired-callback': function () {

      }
    });
    console.log(window.recaptchaVerifier);
    let appVerifier = window.recaptchaVerifier
    return this.authService.requestLogin(this.number, appVerifier)
    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaParameters, result => {
    //   console.log(result);

    // })
  }
  googleSignin() {
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result;
      // The signed-in user info.
      var user = result;
      console.log(result);

      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  Facebook() {
    //  if (this.platform.is('cordova')) {
    return this.fb.login(['email', 'public_profile']).then(async res => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      await firebase.auth().signInWithCredential(facebookCredential).then(async (authdata) => {
        var user = authdata.user;
        var res = authdata.user.displayName
        console.log(user.displayName);
        console.log(user.email);
        console.log(user);

        // this.uid =  firebase.auth().currentUser.uid;
        // firebase.database().ref("user/" + this.uid).set({
        //   username: user.displayName,
        //   email: user.email,
        //   number: user.phoneNumber,
        //   profilepicture:user.photoURL
        // });
        /*   let loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Logging Please wait...',
          });
          loader.present(); */
        // this.navCtrl.setRoot(HomePage);
        // const alert = this.alertCtrl.create({
        //   title: 'Welcome',
        //   subTitle: `Hi ${user.displayName}`,
        //   buttons: ['OK']
        // });
        // alert.present();
        // loader.dismiss()
      })
    }).catch((err) => {
      console.log("Error logging into facebook ", err.message);
    })
    //
    // this.fb.login(['public_profile', 'email'])
    //   .then((response: FacebookLoginResponse) => {
    //     //this.onLoginSuccess(response);
    //     console.log('Logged into Facebook!', response)
    //     /*    let credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    //        firebase.auth().signInWithCredential(credential).then((info)=>{
    //          console.log("User details", info);
    //        })
    //        console.log('Logged into Facebook!', res.authResponse.accessToken) */
    //   })
    //   .catch(e => console.log('Error logging into Facebook', e));


    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    // var provider = new firebase.auth.FacebookAuthProvider();
    // firebase.auth().signInWithRedirect(provider).then((result)=> {
    //  /*  firebase.auth().getRedirectResult().then((res)=>{
    //     window.alert(JSON.stringify(res))
    //   }) */
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = result;
    //   // The signed-in user info.
    //   var user = result;
    //   console.log(result);

    //   // ...
    // }).catch((error)=> {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
  }

  async loginAnon(): Promise<firebase.auth.UserCredential> {
    try {
      return await firebase.auth().signInAnonymously()
    } catch (err) {
      console.log("Error...", err);
    }
  }
  Github() {

  }
  async alert() {
    const alert = await this.alertController.create({
      header: 'Verfification code',
      subHeader: 'Enter verification code',
      inputs: [
        {
          name: 'code',
          type: 'text',
          placeholder: 'Enter code'
        }],
      buttons: [{
        text: 'Submit',
        role: 'submit',
        cssClass: 'secondary',
        handler: (result) => {
          console.log(result.code);
          this.login(result.code)
        }
      }]
    });

    await alert.present();
  }

  onSignInSubmit() {
    let appVerifier = window.recaptchaVerifier

    firebase.auth().signInWithPhoneNumber(this.number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // this.verification = confirmationResult.verificationId;
      }).catch(function (error) {
        // Error; SMS not sent
        console.log(error);

        // ...
      });
  }

}
