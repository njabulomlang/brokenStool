import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  category: string;
  colDef: string;
  // uid = firebase.auth().currentUser.uid;
  dbWish = firebase.firestore().collection('Wishlist');
  myWish: number;
  viewPrice = false;
  myWishlist = [];
  alertView: boolean = false;
  constructor(public NavCtrl: NavController, public router: Router, public route: ActivatedRoute, public navCtrl: NavController,public alertCtrl : AlertController, 
    private localSt:LocalStorageService) {
    // console.log('My data', this.route.snapshot.paramMap.get('data').toUpperCase());
    this.category = this.route.snapshot.paramMap.get('data').toUpperCase();
  }

  ngOnInit() {
    if (this.category === 'SUMMER' || this.category === 'WINTER') {
      // console.log('This is dankie jesu brand');
      this.colDef = 'Dankie Jesu';
    } else if (this.category === 'KWANGA') {
      // console.log('It is kwanga you sh!t');
      this.colDef = 'Kwanga';
    } else {
      //console.log('Sales my man...');
      this.colDef = 'Sales';
    }
    // console.log(this.colDef);

    /* this.dbWish.where('customerUID', '==', firebase.auth().currentUser.uid).onSnapshot((res1) => {
      this.myWish = res1.size;
    }) */
    // this.getWishlist();
    this.checkUser();
  }
  checkUser() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.getWishlist();
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
  getWishlist() {
    this.dbWish.where('customerUID', '==',firebase.auth().currentUser.uid).onSnapshot((res) => {
      this.myWish = res.size;
      this.myWishlist = [];
      res.forEach((doc) => {
        this.myWishlist.push({ info: doc.data(), id: doc.id });
      })
    })
  }
  addtoBusket(view_id, data, id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: data.brand,
        category: data.category
      }
    };
    this.dbWish.doc(id).delete().then(() => {
      this.navCtrl.navigateForward(['view', view_id], navigationExtras)
    })
  }

  delete(id) {
    this.dbWish.doc(id).delete()
  }
  wish() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.viewPrice = !this.viewPrice
          this.getWishlist();
        } else {
            this.presentAlertConfirm1();
        }
      })
    }, 0); 
  }

  list(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: this.colDef,
      }
    };
    this.navCtrl.navigateForward(['list', data], navigationExtras);
  }
  wishlist() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.router.navigateByUrl('wishlist');
        } else {
            this.presentAlertConfirm1();
        }
      })
    }, 0); 
  }

  goBack() {
    this.navCtrl.pop()
  }
}
