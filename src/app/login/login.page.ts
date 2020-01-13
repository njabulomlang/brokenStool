import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { IonSlides, AlertController, ToastController, Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { async } from '@angular/core/testing';
//import { FacebookLoginResponse, Facebook } from '@ionic-native/facebook/ngx';

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
  loaderAnimate: boolean;
  cred: any;
  constructor(private router: Router, private alertController: AlertController, private authService: AuthService,
    public toastCtrl: ToastController, public plt : Platform,private gplus: GooglePlus
    // public fb: Facebook
  ) {

  }

  ngOnInit() {
 
  }
  goSignUp() {
    this.router.navigateByUrl("/signup")
  }

  async nativeGoogleLogin() {
    //let credential = '';
    try {
      const gplusUser = await this.gplus.login({
         'webClientId': '704929489176-nkop0im085muei15k9rao6pmnfjsh0vt.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
      //console.log('my details ',gplusUser);
      
       await firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)).then((i)=>{
         return i.user
       })
      // this.gplus.login({})
      // .then(async (res)=> 
      //  this.cred = await firebase.auth.GoogleAuthProvider.credential(res.userId))
      // .catch(err => console.error(err))
      // console.log('My cred ', this.cred);
      
      //  await firebase.auth().signInWithCredential(this.cred)
    /*   const gplusUser = await this.gplus.login({
        'webClientId': '704929489176-nkop0im085muei15k9rao6pmnfjsh0vt.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })
      console.log('Google user details ', gplusUser);
      
      return await firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)).then((res)=>{
        console.log('User ',res.user);   
      }) */
    } catch(err) {
      console.log('Error ',err)
    }
  }

  async webGoogleLogin() : Promise<void>  {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await firebase.auth().signInWithPopup(provider);
    } catch(err) {
      console.log(err)
    }
  
  }
  googleLogin() {
    if (this.plt.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }
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
    if (this.number.length < 9) {
      this.toast();
    } else {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          this.loaderAnimate = true;
          // console.log('yeah yeah yeah');
        },
        'expired-callback': function () {
        }
      });
      // console.log(window.recaptchaVerifier);
      setTimeout(() => {
        this.loaderAnimate = false;
      }, 2000);
      let appVerifier = window.recaptchaVerifier
      return this.authService.requestLogin(this.number, appVerifier)
    }

    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaParameters, result => {
    //   console.log(result);

    // })
  }

  async toast() {
    (await this.toastCtrl.create({
      message: 'Please confirm your cellphone digits..',
      duration: 2000
    })).present();
  }
  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await firebase.auth().signInWithPopup(provider).then((user)=>{
      console.log('User details ', user);
    }).catch(err=> {
      console.log(err);
    })
  
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
      header: 'Verification code',
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
