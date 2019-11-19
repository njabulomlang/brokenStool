import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dbUser = firebase.firestore().collection("Users");
  user;
  uid;
  constructor() { }

 registerUser(email, password) {
   firebase.auth().createUserWithEmailAndPassword(email,password).then((res)=>{
      console.log("User details", res.user);
      this.uid = res.user.uid
    })
  }
  loginUser(email, password) {
     firebase.auth().signInWithEmailAndPassword(email, password).then((res)=>{
      console.log("User details", res.user);
      
    })
  }
  logoutUser() {
    firebase.auth().signOut();
  }
   loggedIn() {
     console.log("User details ", this.uid);
     
/*     this.dbUser.doc(this.uid).onSnapshot((res)=>{
      console.log("User details", res.data());
      this.user = res.data().uid
    }) */
   return this.user
  }
}
