import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  dbWishlist = firebase.firestore().collection('Wishlist');
  uid = firebase.auth().currentUser.uid;
  myWish = [];
  items = false;
  loaderMessages = 'Loading...';
  loaderAnimate:boolean = true;
  constructor(public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaderAnimate = false;
    }, 2000);
    this.dbWishlist.where('customerUID', '==', this.uid).onSnapshot((res) => {
      this.myWish = [];
      res.forEach((doc) => {
        this.myWish.push({ info: doc.data(), id: doc.id });
      })
    })
    //console.log('My wish ', this.myWish);
  }
  delete(id) {
    this.dbWishlist.doc(id).delete()
  }
  addtoBusket(view_id, data, id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: data.category,
      }
    };
    this.dbWishlist.doc(id).delete().then(() => {
      this.navCtrl.navigateForward(['view', view_id], navigationExtras)
    })

  }

  showItems() {
    this.items = !this.items
  }

  goBack(){
    this.navCtrl.pop();
  }
}
