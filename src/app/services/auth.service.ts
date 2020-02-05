import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AlertController, NavController } from '@ionic/angular';
//import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import {Location} from '@angular/common';
declare var window
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dbUser = firebase.firestore().collection("Users");
  user: string;
  uid;
  confirm;
  myuid = "";
  constructor(public alertController: AlertController, private localSt:LocalStorageService,
    public router: Router, public navCtrl: NavController, public location: Location) {

  }

  registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
      console.log("User details", res.user);
      this.uid = res.user.uid
    })
  }
  loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      console.log("User details", res.user);
      //this.myuid = res.user.uid;
    })
  }

  loginPhone() {
    firebase.auth().settings.appVerificationDisabledForTesting = true;
    var phone = "+27769020059";
    var testVerificationCode = "123456";
    var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    firebase.auth().signInWithPhoneNumber(phone, appVerifier).then((res) => {
      console.log("Logged in with phone", testVerificationCode);

    })
  }
  logoutUser() {
    firebase.auth().signOut().then(()=>{
      this.localSt.store('alertShowed', true);
      this.navCtrl.navigateRoot('home');
    });
  }
  loggedIn() {
    firebase.auth().onAuthStateChanged((res) => {
      if (res) {
        this.user = res.uid
      } else {
        this.user = ""
      }
    })
    console.log("User details ", this.user);
    return this.user
  }
  requestLogin(number, appVerifier) {
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    // .then(()=> {
    return firebase.auth().signInWithPhoneNumber('+27' + number, appVerifier).then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      this.confirm = confirmationResult;
      let result = { success: true, result: confirmationResult }
      this.alert();
      return result
    }).catch((error) => {
      let result = { success: false, result: error }
      return result
    });
  }
  async alert() {
    const alert = await this.alertController.create({
      header: 'Verfification code',
      subHeader: 'Enter verification code',
      inputs: [
        {
          name: 'code',
          type: 'number',
          placeholder: 'Enter code'
        }],
      buttons: [{
        text: 'Submit',
        role: 'submit',
        cssClass: 'secondary',
        handler: (result) => {
          console.log(result.code);
          return this.confirm.confirm(result.code).then((result) => {
            var user = result.user;
            // console.log(user);
            if (result) {
              this.location.back();
              // this.navCtrl.navigateRoot('home');
            }
            this.myuid = result.user.uid;
            
            return user
          }).catch((error) => {
            // console.log(error);
            return error
          });
        }
      }]
    });

    await alert.present();
  }

  login(code, confirmationResult) {
    return confirmationResult.confirm(code).then((result) => {
      var user = result.user; console.log(user);
      return user
    }).catch(function (error) {
      console.log(error);
      return error
    });
  }
  //Adding new users to the database
  register(email, password) {

    return firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {
      // this.setCurrentSession(firebase.auth())
      // this.checkingAuthState()
      let userEmail = email;
      let userName = name;
      let userID = data.user.uid;
      //let now = moment().format('LLLL')
      console.log(userID)
      firebase.firestore().collection('Users/').doc(userID).set({
        email: userEmail,
        name: userName,
        role: 'Admin',
        hasProfilePic: false,
        hasRequestedLink: false,          //when the user has requested to link his/her account with someone else
        hasReceivedLinkRequest: false,    //when the user has received a link request from another user
        //registeredAt: now
      })
      return data
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
      return error
    })
  }
  //Allowing users to reset their password
  passwordReset(emailAddress) {
    firebase.auth().sendPasswordResetEmail(emailAddress).then(() => {
      // Email sent.
      console.log("Email has been sent")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  //Function : Routing logged out users to the login page
  signOut() {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.

        resolve()
        this.checkingAuthState().then(data => {
          console.log(data);
        });

      }).catch(error => {
        // An error happened.
      });
    })
  }

  getUserProfile(userId) {
    return firebase.firestore().collection("Users/").doc(userId).get().then((snapshot) => {
      // Edit
      let profile = snapshot.data()
      if (profile.hasProfilePic) {
        return firebase.storage().ref('userDisplayPic/' + userId).getDownloadURL().then(url => {
          profile['profilePicUrl'] = url
          return profile
        })
      } else {
        profile['profilePicUrl'] = "../assets/icon/person.png"
        return profile
      }
    })
  }

  checkingAuthState() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);

          resolve(user)
        } else {
          console.log('not logged in');

        }
      })
    })
  }

  savePic(image) {
    // this.login(this.email, this.password).then((userID) =>{
    //   let storageRef = firebase.storage().ref('userDisplayPic/' + userID)
    //   return storageRef.put(image).then((data) => {
    //     console.log('Saved');
    //   })
    // })
  }


  //delete?
  retrievingUserInfo(uid) {
    return new Promise((resolve, reject) => {
      var userRoot = firebase.database().ref("Users").child(uid)
      userRoot.once("value", snap => {
        //console.log(userRoot);
        let values = snap.val()
        console.log(values["name"]);
        console.log(values["email"]);
        let userProfile = {
          key: snap.key,
          displayName: values["name"],
          email: values["email"],
        }
        resolve(userProfile)
      })

    })
  }

  updateProfile(userID, newUsername, username, newEmail, email) {
    return new Promise((resolve, reject) => {
      if (newUsername !== username) {
        firebase.firestore().collection('Users/').doc(userID).update({
          name: newUsername
        })
        //return 'Profile has been reset'
      }
      console.log(newEmail);
      console.log(email);


      if (newEmail !== email) {
        var user = firebase.auth().currentUser;
        console.log(user);
        firebase.firestore().collection('Users/').doc(userID).update({
          email: newEmail
        })
        user.updateEmail(newEmail).then((data) => {
          let message = 'Profile has been reset'
          console.log(data);
        }).catch(function (error) {
          // An error happened.
        });
      }
      resolve()
    })
  }
}
