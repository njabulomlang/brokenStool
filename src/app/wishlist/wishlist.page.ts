import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  dbWishlist = firebase.firestore().collection('Wishlist');
  dbSales = firebase.firestore().collection("Specials");
  dbProduct = firebase.firestore().collection('Products');
  itemAvailable = [];
  // uid = firebase.auth().currentUser.uid;
  myWish = [];
  items = false;
  loaderMessages = 'Loading...';
  loaderAnimate:boolean = true;
  alertView: boolean = false;
  constructor(public router: Router, public navCtrl: NavController, private localSt:LocalStorageService,public alertCtrl : AlertController,
    ) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaderAnimate = false;
    }, 2000);
   this.checkUser();
    //console.log('My wish ', this.myWish);
  }
  checkUser() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.dbWishlist.where('customerUID', '==', res.uid).onSnapshot((res) => {
            this.myWish = [];
            res.forEach((doc) => {
              if (doc.data().brand === "Specials") {
                this.dbSales.doc(doc.id).onSnapshot((data) => {
                  if (data.data().hideItem === true) {
                    this.itemAvailable.push("Out of stock");
                  } else {
                    this.itemAvailable.push("In stock");
                  }
                })
              } else {
                this.itemAvailable = [];
                this.dbProduct.doc(doc.id).onSnapshot((data) => {
                  if (data.data().hideItem === true) {
                    this.itemAvailable.push("Out of stock");
                  } else {
                    this.itemAvailable.push("In stock");
                  }
                })
              }
              this.myWish.push({ info: doc.data(), id: doc.id });
            })
          })
        } else {
          this.alertView = this.localSt.retrieve('alertShowed');
          // console.log('My data ',this.alertView);
          if (this.localSt.retrieve('alertShowed') !== true) {
            this.presentAlertConfirm1();
          }
        }
      })
    }, 0);
  }
  async presentAlertConfirm1() {
    const alert = await this.alertCtrl.create({
      header: 'Message',
      message: 'Please Sign-in',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.alertView = true;
            this.localSt.store('alertShowed', this.alertView);
          }
        }, {
          text: 'Sign In',
          handler: () => {
            this.alertView = true;
            this.localSt.store('alertShowed', this.alertView);
            this.navCtrl.navigateForward('login');
          }
        }
      ]
    });

    await alert.present();
  }
  delete(id) {
    this.dbWishlist.doc(id).delete()
  }
  addtoBusket(view_id, data, id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: data.brand,
        category: data.category
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
