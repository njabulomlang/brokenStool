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
  itemAvailable = [];
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
  wishListed = [];
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
    this.getWishItems();
    // this.getWishlist();

  }

  getWishItems() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.getWishlist();
          setTimeout(() => {
            // for (let y = 0; y < this.myProduct.length; y++) {
            // this.dbWishlist.where('id','==',this.myProduct[y].id).onSnapshot((res) => {
            // console.log("this my prods ", this.myProduct[y]);

            for (let index = 0; index < this.myWishlist.length; index++) {
              // console.log("my wish ", this.myWishlist[index])
              for (let y = 0; y < this.myProduct.length; y++) {
                if (this.myProduct[y].id === this.myWishlist[index].id) {
                  this.myProduct[y].wish = 'heart';
                  // console.log("my wish ", this.myWishlist[index])
                }

              }
              // })  
            }
          }, 1000);

          setTimeout(() => {
            // for (let y = 0; y < this.myProduct.length; y++) {
            // this.dbWishlist.where('id','==',this.myProduct[y].id).onSnapshot((res) => {
            // console.log("this my prods ", this.myProduct[y]);

            for (let index = 0; index < this.myWishlist.length; index++) {
              // console.log("my wish ", this.myWishlist[index])
              for (let y = 0; y < this.promo.length; y++) {
                if (this.promo[y].id === this.myWishlist[index].id) {
                  this.promo[y].wish = 'heart';
                  // console.log("my wish ", this.myWishlist[index])
                }

              }
              // })  
            }
          }, 1000);
        }
      })
    }, 0);
  }
  getSideMenu() {
    this.viewSideMenu = !this.viewSideMenu
    this.viewBackdrop = !this.viewBackdrop
  }
  getWishlist() {
    this.dbWish.where('customerUID', '==', firebase.auth().currentUser.uid).onSnapshot((res) => {
      this.myWish = res.size;
      this.myWishlist = [];
      res.forEach((doc) => {
        if (doc.data().brand === "Specials") {
          this.dbProduct.doc(doc.id).onSnapshot((data) => {
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
        this.myWishlist.push({ info: doc.data(), id: doc.id });
      })
    })
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
          setTimeout(() => {
            // for (let y = 0; y < this.myProduct.length; y++) {
            // this.dbWishlist.where('id','==',this.myProduct[y].id).onSnapshot((res) => {
            // console.log("this my prods ", this.myProduct[y]);

            for (let index = 0; index < this.myWishlist.length; index++) {
              // console.log("my wish ", this.myWishlist[index])
              for (let y = 0; y < this.myProduct.length; y++) {
                if (this.myProduct[y].id === this.myWishlist[index].id) {
                  this.myProduct[y].wish = 'heart';
                  // console.log("my wish ", this.myWishlist[index])
                }

              }
              // })  
            }
          }, 1000);
        }
      }, (error) => {
        this.presentAlertConfirm();
      })
    }, 0);
  }

  /* list() {
    this.router.navigateByUrl("/list")
  } */
  /*  async productCategory() {
 
   } */
  getSales() {
    this.dbProduct.where('onSale', '==', true).onSnapshot((res) => {
      this.promo = [];
      res.forEach((doc) => {
        // if (this.myWishlist.length === 0) {
        this.promo.push({ info: doc.data(), id: doc.id, wish: 'heart-empty' });
        // } 
      })
    })
    firebase.auth().onAuthStateChanged((res) => {
      if (res) {
        setTimeout(() => {
          for (let y = 0; y < this.promo.length; y++) {
            this.dbWishlist.where('id', '==', this.promo[y].id).onSnapshot((res) => {
              for (let index = 0; index < res.docs.length; index++) {
                this.promo[index].wish = 'heart';
              }
            })
          }
        }, 1000);
      }
    }, (error) => {
      this.presentAlertConfirm();
    })
  }
  getAllProduct() {
    // console.log("category ", this.doc_data);
    this.dbProduct.where('hideItem', '==', false).where('category', '==', this.doc_data).onSnapshot((res) => {
      this.myProduct = [];
      res.forEach((doc) => {
        this.myProduct.push({ info: doc.data(), id: doc.id, wish: 'heart-empty' });
      })
    })
    firebase.auth().onAuthStateChanged((res) => {
      if (res) {
        this.dbWish.where('customerUID', '==', firebase.auth().currentUser.uid).onSnapshot((res) => {
          this.myWish = res.size;
          this.myWishlist = [];
          res.forEach((doc) => {
            if (doc.data().brand === "Specials") {
              this.dbProduct.doc(doc.id).onSnapshot((data) => {
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
            this.myWishlist.push({ info: doc.data(), id: doc.id });
          })
        })
      }
    }, (error) => {
      this.presentAlertConfirm();
    })

  }
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
              this.dbWishlist.doc(id).set({
                customerUID: firebase.auth().currentUser.uid, price: data.price,
                image: data.pictureLink, name: data.name, id: id, category: data.category,
                brand: data.brand
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
              this.dbWishlist.doc(id).set({
                customerUID: firebase.auth().currentUser.uid, price: data.price, name: data.name,
                image: data.pictureLink, id: id, category: data.category,
                brand: data.brand
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
      this.dbProduct.where('color', 'array-contains', info.path[0].innerHTML).where('onSale', '==', true).onSnapshot((res) => {
        res.forEach((doc) => {
          this.promo.push({ info: doc.data(), id: doc.id });
        })
      })
    } else {
      this.dbProduct.where('color', 'array-contains', info.path[0].innerHTML).where('category', '==', this.doc_data).onSnapshot((res) => {
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
        this.dbProduct.where('onSale', '==', true).onSnapshot((res) => {
          res.forEach((doc) => {
            if (doc.data().hideItem === false && (((doc.data().price) - (doc.data().price * (doc.data().discount / 100))) >= param)) {
              this.promo.push({ info: doc.data(), id: doc.id });
            }
          })
        })
      }
    } else {
      if (this.price >= 0) {
        this.dbProduct.where('price', '>=', param)
          .onSnapshot((res) => {
            this.myProduct = [];
            res.forEach((doc) => {
              if (doc.data().hideItem === false && doc.data().category === this.doc_data) {
                this.myProduct.push({ info: doc.data(), id: doc.id });
              }
            })
          })
      }
    }

  }
}
