import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { mergeAnalyzedFiles } from '@angular/compiler';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  dbProfile = firebase.firestore().collection("userProfile");
  uid = firebase.auth().currentUser.uid;
  name;
  surname;
  email;
  constructor(public router: Router, public alertCtrl: AlertController) {
    
   }

  ngOnInit() {
  }
  createAccount() {
    this.dbProfile.doc(this.uid).set({name: this.name, surname: this.surname, email: this.email}).then((res)=>{
      this.router.navigateByUrl('home');
    }).catch((err)=>{
      this.alert('Profile not created','Please try again..');
    })
  }
  async alert(header, message) {
    const al = await this.alertCtrl.create({
      header: header,
      message: message
    })
    al.present();
  }
}
