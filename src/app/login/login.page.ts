import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { IonSlides, AlertController } from '@ionic/angular';

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
  confirmationResult='';
  constructor(private router: Router, private alertController: AlertController, private authService: AuthService) {

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
  requestCode(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    console.log(window.recaptchaVerifier);
    let appVerifier = window.recaptchaVerifier
    return this.authService.requestLogin(this.number, appVerifier).then(result => {
      if(result.success === true){
        console.log(result);
        this.confirmationResult = result.result
        console.log(this.confirmationResult);
        //this.presentAlert();
      }
    })
  }
  login(code){
    if(this.confirmationResult !== ''){
      //var code = this.inputCode
      return this.authService.login(code, this.confirmationResult).then(result => {
        console.log(result);
      })
    }
  }
​
  addUser(){
    //this.number = this.registrationForm.get('number').value
    console.log(this.number);
    let array = this.number.split('')
    console.log(array);
    
   /*  if(array[0] === 0){
      console.log(array);
      array.pop[0]
      console.log(array);
    } */
    // let recaptchaParameters: {
    //   type: 'image', // another option is 'audio'
    //   size: 'invisible', // other options are 'normal' or 'compact'
    //   badge: 'bottomleft' // 'bottomright' or 'inline' applies to invisible.
    // }
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        console.log('yeah yeah yeah');
      },
      'expired-callback': function() {
        
      }
    });
    console.log(window.recaptchaVerifier);
    let appVerifier = window.recaptchaVerifier
    return this.authService.requestLogin(this.number, appVerifier).then(result => {
      if(result.success === true){
        console.log(result);
        this.confirmationResult = result.result
        console.log(this.confirmationResult);
        this.alert()
      }
    })
    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaParameters, result => {
    //   console.log(result);
​
    // })
      
    
  }
  googleSignin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    
    firebase.auth().signInWithPopup(provider).then((result)=> {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result;
      // The signed-in user info.
      var user = result;
      console.log(result);
      
      // ...
    }).catch((error)=> {
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
//     var provider = new firebase.auth.GoogleAuthProvider();
//     this.fb.login(['public_profile', 'email'])
//   .then((response: FacebookLoginResponse) => {
//     //this.onLoginSuccess(response);
//     console.log('Logged into Facebook!', response.authResponse)
//     const credential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
//     console.log("Cred.. ",credential);
//     firebase.auth().signInWithCredential(credential).then((res)=>{
//       console.log("User.. ",res);
//     })
//  /*    let credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
//     firebase.auth().signInWithCredential(credential).then((info)=>{
//       console.log("User details", info);
//     })
//     console.log('Logged into Facebook!', res.authResponse.accessToken) */
//   })
//   .catch(e => console.log('Error logging into Facebook', e));


// this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then((result)=> {
     /*  firebase.auth().getRedirectResult().then((res)=>{
        window.alert(JSON.stringify(res))
      }) */
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result;
      // The signed-in user info.
      var user = result;
      console.log(result);
      
      // ...
    }).catch((error)=> {
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

  twitter() {

  }
  Github() {

  }
  async alert(){
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
​
    await alert.present();
  }
​
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
