import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  editprofile = false;
  dbProfile = firebase.firestore().collection("userProfile");
  dbCart = firebase.firestore().collection('Cart');
  dbWish = firebase.firestore().collection('Wishlist');
  uid = firebase.auth().currentUser.uid;
  profile = [];
  name; 
  surname;
  email;
  myCart:number;
  myWish:number;
  constructor(private router: Router, public toastCtrl: ToastController) { }

  ngOnInit() {
    this.dbProfile.doc(this.uid).onSnapshot((doc) => {
      //console.log("My profile ", doc.data());
      this.profile.push(doc.data());
    })
    this.dbCart.where('customerUID', '==',this.uid).onSnapshot((res)=>{
      this.myCart = res.size;
    })
    this.dbWish.where('customerUID', '==',this.uid).onSnapshot((res1)=>{
      this.myWish = res1.size;
    })
  }

  basket() {
    this.router.navigateByUrl("basket")
  }

  wishlist() {
    this.router.navigateByUrl("wishlist")
  }

  pendingOrders() {
    this.router.navigateByUrl("pending-orders")
  }

  orderhistory() {
    this.router.navigateByUrl("order-history")
  }

  showEdit(){
    this.editprofile=!this.editprofile
  }
  updateProfile(p) {
    this.name = p.name;
    this.surname = p.surname;
    this.email = p.email;
    this.profile = [];
    this.dbProfile.doc(this.uid).update({name: this.name, surname: this.surname, email: this.email}).then(()=>{
      this.editprofile=!this.editprofile;
      this.toastController();
    })
    //console.log('My profile ', p);
  }
  async toastController() {
    let toast = await this.toastCtrl.create({message:'Profile update', duration: 2000})
    return toast.present()
  }

}
