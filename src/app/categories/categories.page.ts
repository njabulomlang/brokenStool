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
  dbProd = firebase.firestore().collection('Products');
  dbCategory = firebase.firestore().collection('category');
  myWish: number;
  viewPrice = false;
  viewSideMenu = false;
  viewBackdrop = false;
  myWishlist = [];
  alertView: boolean = false;
  itemAvailable=[];
  prodArray = [];
  dbSales = firebase.firestore().collection("Specials");
  prodArr = [];
  // dbProduct = firebase.firestore().collection('Products');
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
    this.getProdKwanga();
    this.getProd();
  }
  getProd() {
    this.dbCategory.where('brand','==','Dankie Jesu').onSnapshot((res)=>{
      this.prodArray = [];
      res.forEach((doc)=>{
        this.prodArray.push(doc.data());
      })
    })
  }

  getProdKwanga() {
    this.dbCategory.where('brand','==','Kwanga').onSnapshot((res)=>{
      this.prodArr = [];
      res.forEach((doc)=>{
        this.prodArr.push(doc.data());
      })
    })
  }
  getSideMenu(){
    this.viewSideMenu = !this.viewSideMenu
    this.viewBackdrop = !this.viewBackdrop
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
    this.dbWish.where('customerUID', '==', firebase.auth().currentUser.uid).get().then((res) => {
      this.myWish = res.size;
      this.myWishlist = [];
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
          this.dbProd.doc(doc.id).onSnapshot((data) => {
            if (data.data().hideItem === true) {
              this.itemAvailable.push("Out of stock");
            } else {
              this.itemAvailable.push("In stock");
            }
          })
        }
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
  back() {
    this.navCtrl.pop()
  }
  wish() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.viewPrice = !this.viewPrice
          this.viewBackdrop = !this.viewBackdrop
          this.getWishlist();
        } else {
            this.presentAlertConfirm1();
        }
      })
    }, 0); 
  }
  goList(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: 'Specials',
        //currency: JSON.stringify(currency),
        // refresh: refresh
      }
    };
    //this.router.navigate(['list', data])
    this.navCtrl.navigateForward(['list', data], navigationExtras);
  }
  categories(data) {
    // console.log(data);
    this.router.navigate(['categories', data])
  }
  list(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: this.colDef,
        category: this.category
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
