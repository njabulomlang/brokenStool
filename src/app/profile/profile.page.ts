import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  dbProfile = firebase.firestore().collection("userProfile");
  uid = firebase.auth().currentUser.uid;
  constructor() { }

  ngOnInit() {
    this.dbProfile.doc(this.uid).get().then((doc)=>{
      console.log("My profile ", doc.data());
      
    })
  }

}
