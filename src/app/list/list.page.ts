import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  dbWishlist = firebase.firestore().collection("Wishlist");
  dbProduct = firebase.firestore().collection("Products");
  dbPromo = firebase.firestore().collection("Specials");
  promo = [];
  myProduct = [];
  collectionName: string = "";
  doc_data: string;
  col: string;
  price: number = 0;
  heartIndex = null;
  loaderMessages = 'Loading...';
  loaderAnimate: boolean = true;
  sortVal;
  sortSale;
  // uid = firebase.auth().currentUser.uid;
  dbWish = firebase.firestore().collection('Wishlist');
  myWish: number;
  viewFilter = false;
  viewPrice = false
  viewReviews = false;
  myWishlist = [];
  viewwish = false;
  viewBackdrop = false;
  viewSideMenu = false;
  alertView: boolean = false;
  category = "";
  clr = "";
  constructor(public NavCtrl: NavController, public router: Router, public route: ActivatedRoute, public navCtrl: NavController, public toastCtrl: ToastController,
    public alertCtrl: AlertController, private localSt: LocalStorageService, private elementRef: ElementRef) {
    this.collectionName = this.route.snapshot.paramMap.get('key');
    this.route.queryParams.subscribe(params => {
      this.doc_data = params["data"];
      this.col = params["col"];
      this.category = String(params["category"]).toLowerCase();
    });
  }

  ngOnInit() {

    //this.alertView = false;
    setTimeout(() => {
      this.loaderAnimate = false;
    }, 2000);
    //console.log(); 

    this.getAllProduct();
    this.getSales();
    this.getWishlist();
   
  }

  getSideMenu() {
    this.viewSideMenu = !this.viewSideMenu
    this.viewBackdrop = !this.viewBackdrop
  }
  getWishlist() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.dbWish.where('customerUID', '==', res.uid).onSnapshot((res) => {
            this.myWish = res.size;
            this.myWishlist = [];
            // this.myProduct[]
            for (let j = 0; j < res.docs.length; j++) {
              this.myWishlist.push({ info: res.docs[j].data(), id: res.docs[j].id })
            }
            /* res.forEach((doc) => {
              this.myWishlist.push({ info: doc.data(), id: doc.id });
            }) */
          })
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

  async presentAlertConfirm() {
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
    this.NavCtrl.pop();
  }
  home() {
    this.NavCtrl.navigateRoot('home');
  }
  wish() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.viewwish = !this.viewwish
          this.viewBackdrop = !this.viewBackdrop
          this.getWishlist();
        } else {
          this.presentAlertConfirm();
        }
      })
    }, 0);
  }

  /* list() {
    this.router.navigateByUrl("/list")
  } */
  /*  async productCategory() {
 
   } */
  getSales() {
    this.dbPromo.onSnapshot((res) => {
      this.promo = [];
      res.forEach((doc) => {
        if (this.myWishlist.length === 0) {
          this.promo.push({ info: doc.data(), id: doc.id, wish: 'heart-empty' });
        } else {
          this.myWishlist.forEach((item) => {
            if (item.id === doc.id) {
              this.clr = 'heart';
            } else {
              this.clr = 'heart-empty'
            }
            this.promo.push({ info: doc.data(), id: doc.id, wish: this.clr });
          })
        }
      })
    })
  }
  getAllProduct() {
    this.dbProduct.doc(this.col).collection(this.collectionName).where('hideItem', '==', false).onSnapshot((res) => {
      this.myProduct = [];
      res.forEach((doc) => {
        if (this.myWishlist.length === 0) {
          this.myProduct.push({ info: doc.data(), id: doc.id, wish: 'heart-empty' });
        } else {
          this.myWishlist.forEach((item) => {
            if (item.id === doc.id) {
              this.clr = 'heart';
            } else {
              this.clr = 'heart-empty'
            }
            this.myProduct.push({ info: doc.data(), id: doc.id, wish: this.clr });
          })
        }
      })

    })
  }
  /* orderBy() {
    this.getAllProduct(this.sortVal);
    // this.getSales(this.sortVal);
  } */
  sortSales() {
    this.getSales();
  }
  viewitem(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: this.col,
        category: this.collectionName
      }
    };
    this.navCtrl.navigateForward(['view', id], navigationExtras);
  }
  viewitemSale(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: 'sales',
      }
    };
    this.navCtrl.navigateForward(['view', id], navigationExtras);
  }
  wishList(id, data, index) {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.heartIndex = index;
          this.dbWishlist.doc(id).get().then((res) => {
            if (res.exists == true) {
              this.dbWishlist.doc(id).delete().then((res) => {
                this.myProduct[index].wish = 'heart-empty';
                this.toastController('Removed from wishlist..');
              })
            } else {
              this.dbWishlist.doc(res.id).set({
                customerUID: firebase.auth().currentUser.uid, price: data.price,
                image: data.pictureLink, name: data.name, id: id, category: this.collectionName,
                brand: this.col
              }).then(() => {
                this.myProduct[index].wish = 'heart';
                this.toastController('Added to wishlist..');
              })
            }
          })
        } else {
          this.alertView = this.localSt.retrieve('alertShowed');
          this.presentAlertConfirm();
        }
      })
    }, 0);
    // }
  }
  wishListSale(id, data, index) {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.heartIndex = index
          this.dbWishlist.doc(id).get().then((res) => {
            if (res.exists == true) {
              this.dbWishlist.doc(id).delete().then((res) => {
                this.promo[index].wish = 'heart-empty';
                this.toastController('Removed from wishlist..');
              })
            } else {
              this.dbWishlist.doc(res.id).set({
                customerUID: firebase.auth().currentUser.uid, price: data.saleprice, name: data.name,
                image: data.pictureLink, id: id, category: this.collectionName,
                brand: this.col
              }).then(() => {
                this.promo[index].wish = 'heart';
                this.toastController('Added to wishlist..');
                //this.router.navigateByUrl('basket');
              })
            }
          })
        } else {
          this.alertView = this.localSt.retrieve('alertShowed');
          this.presentAlertConfirm();
        }
      })
    }, 0);
  }
  wishlist() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.router.navigateByUrl('wishlist');
        } else {
          this.presentAlertConfirm();
        }
      })
    }, 0);
  }
  async toastController(message) {
    let toast = await this.toastCtrl.create({ message: message, duration: 2000 });
    return toast.present();
  }

  goBack() {
    this.navCtrl.pop();
  }
  reviewed() {
    // this.getAllProduct()
    this.viewReviews = !this.viewReviews
  }
  rev() {
    this.viewReviews = !this.viewReviews
  }
  filtered() {
    this.viewFilter = !this.viewFilter
  }

  priced() {
    this.viewPrice = !this.viewPrice;
  }
  colorOpt(info) {
    if (this.collectionName === 'sales') {
      this.promo = [];
      this.dbPromo.where('color', 'array-contains', info.path[0].innerHTML).onSnapshot((res) => {
        res.forEach((doc) => {
          this.promo.push({ info: doc.data(), id: doc.id });
        })
      })
    } else {
      this.dbProduct.doc(this.col).collection(this.collectionName).where('color', 'array-contains', info.path[0].innerHTML).onSnapshot((res) => {
        this.myProduct = [];
        res.forEach((doc) => {
          this.myProduct.push({ info: doc.data(), id: doc.id });
        })
        this.rev();
      })
    }

  }
  setPriceRange(param) {
    this.price = param;
    if (this.collectionName === 'sales') {
      if (this.price >= 0) {
        this.promo = [];
        this.dbPromo.where('saleprice', '>=', param).onSnapshot((res) => {
          res.forEach((doc) => {
            this.promo.push({ info: doc.data(), id: doc.id });
          })
        })
      }
    } else {
      if (this.price >= 0) {
        this.dbProduct.doc(this.col).collection(this.collectionName).where('price', '>=', param)
          .onSnapshot((res) => {
            this.myProduct = [];
            res.forEach((doc) => {
              if (doc.data().hideItem === false) {
                this.myProduct.push({ info: doc.data(), id: doc.id });
              }
            })
          })
      }
    }

  }
}
