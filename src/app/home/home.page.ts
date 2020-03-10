import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { ModalController, NavController, ToastController, AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { Router, NavigationExtras } from '@angular/router';
//import { FcmService } from '../fcm.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NotificationsService } from '../services/notifications.service';
import { LocalStorageService } from 'ngx-webstorage';
import { DomSanitizer } from '@angular/platform-browser';
import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;
  products = [];
  cart = [];
  cartItemCount: BehaviorSubject<number>;
  //uid;
  name: string = '';
  surname: string = '';
  dbProfile = firebase.firestore().collection("userProfile");
  dbSales = firebase.firestore().collection("Specials");
  dbCart = firebase.firestore().collection('Cart');
  dbOrder = firebase.firestore().collection('Order');
  dbProduct = firebase.firestore().collection('Products');
  dbProd = firebase.firestore().collection('Products');
  dbCategory = firebase.firestore().collection('category');
  // uid = firebase.auth().currentUser.uid;
  loaderMessages = 'Loading...';
  loaderAnimate: boolean = true;
  sales = [];
  dbWish = firebase.firestore().collection('Wishlist');
  myWish: number;
  viewReviews = false;
  viewBackdrop = false;
  viewCart = false;
  viewSideMenu = false;
  myWishlist = [];
  prodCart = [];
  delCost: number;
  delType: string;
  buttonActive: boolean = true;
  alertView: boolean = false;
  fileUrl;
  itemAvailable = [];
  prodArray = [];
  prodArr = [];
  winterArray = [];
  constructor(private splashScreen: SplashScreen, private authService: AuthService, private modalCtrl: ModalController, public router: Router, public navCtrl: NavController,
    public toastCtrl: ToastController, public alertCtrl: AlertController, private localSt: LocalStorageService, private sanitizer: DomSanitizer, public network: Network,
    public plt: Platform
    // public notificationService: NotificationsService
  ) {
    if (this.plt.is('cordova')) {
      this.network.onDisconnect().subscribe(() => {
        this.presentAlt();
      })
    }
  }

  ngOnInit() {
    // this.notificationService.requestPermission();
    // this.getCart();
    // this.getProfile();
    this.getPromo();
    this.getProdD();
    this.getProd();
    this.getProdSummer();
    // this.getWishlist();
    // this.dbWish.where('customerUID', '==', firebase.auth().currentUser.uid).onSnapshot((res1) => {
    //   this.myWish = res1.size;
    // }
    this.checkUser();
    setTimeout(() => {
      this.splashScreen.hide();
    }, 3000);
  }
  getProd() {
    this.dbCategory.where('brand','==','Dankie Jesu').where('isSummer','==',false).limit(4).onSnapshot((res)=>{
      this.winterArray = [];
      res.forEach((doc)=>{
        this.winterArray.push(doc.data());
      })
    })
  }
  getProdSummer() {
    this.dbCategory.where('brand','==','Dankie Jesu').where('isSummer','==',true).limit(4).onSnapshot((res)=>{
      this.prodArray = [];
      res.forEach((doc)=>{
        this.prodArray.push(doc.data());
      })
    })
  }
  getProdD() {
    this.dbCategory.where('brand','==','Kwanga Apparel').limit(4).onSnapshot((res)=>{
      this.prodArr = [];
      res.forEach((doc)=>{
        this.prodArr.push(doc.data());
      })
    })
  }
  async presentAlt() {
    const alert = await this.alertCtrl.create({
      header: 'Network problem',
      message: 'Ooops! ,you have lost connection',
      buttons: [
        {
          text: 'Close app',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }
  checkUser() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.getCart();
          this.getProfile();
          this.getWishlist();
        } else {
          this.alertView = this.localSt.retrieve('alertShowed');
          setTimeout(() => {
            if (this.localSt.retrieve('alertShowed') !== true) {
              this.presentAlertConfirm1();
            }
          }, 2000);

        }
      })
    }, 1000);
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
          text: 'Sign-in',
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
  placeOrder(info) {
    let myArr = [];
    let doc = [];
    for (let i = 0; i < info.length; i++) {
      // const element = info[i].data;
      /* myArr = info[i].data.product */
      doc.push(info[i].id)
      //console.log('my info ', );
      info[i].data.product.forEach(item => {
        myArr.push(item);
      });
    }
    if (this.prodCart.length === 0) {
      this.toastController('You cannot place order with empty basket');
    } else if (!this.delType) {
      this.toastController('Please select delivery type');
    }
    else {
      let docname = 'brkn-' + Math.floor(Math.random() * 10000000);
      this.dbOrder.doc(docname).set({
        product: myArr, timestamp: new Date().getTime(),
        status: 'received', userID: firebase.auth().currentUser.uid,
        totalPrice: this.getTotal(), deliveryCost: this.delCost, deliveryType: this.delType
      }).then(() => {
        doc.forEach((id) => {
          this.dbCart.doc(id).delete();
        })
      })
    }
  }
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Place order now?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Yes, continue',
          handler: () => {
            // console.log('Confirm Okay');
            this.placeOrder(this.prodCart)
          }
        }
      ]
    });
    await alert.present();
  }

  async toastController(message) {
    let toast = await this.toastCtrl.create({ message: message, duration: 2000 });
    return toast.present();
  }
  getCart() {
    this.dbCart.where('customerUID', '==', firebase.auth().currentUser.uid).onSnapshot((info) => {
      this.prodCart = [];
      // this.totalCost = 0;
      info.forEach((doc) => {
        this.prodCart.push({ data: doc.data(), id: doc.id });
      })
    })
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.prodCart.length; i++) {
      let product = this.prodCart[i].data.product;
      // console.log(product);
      product.forEach((item) => {
        total += (item.cost * item.quantity);
      })
      //
    }
    //console.log('My tot ', total);

    return total;
  }
  Delivery(tot) {
    let total = 0;
    this.delCost = 100;
    this.delType = "Delivery";
    for (let i = 0; i < this.prodCart.length; i++) {
      let product = this.prodCart[i].data.product;
      product.forEach((item) => {
        total = tot + 100
      })
    }
    return total;
  }
  notDelivery(tot) {
    let total = 0;
    this.delCost = 0;
    this.delType = "Collection";
    for (let i = 0; i < this.prodCart.length; i++) {
      let product = this.prodCart[i].data.product;
      product.forEach((item) => {
        total = tot
      })
    }
    return total;
  }
  pluss(prod, index) {
    let num = index.data.product[0].quantity++
    index.data.product[0].cost = index.data.product[0].cost
    let id = index.id

    let product = [prod]
    this.dbCart.doc(id).update({ product: product }).then(res => {
      // console.log('updated');

    })
  }
  removeProd(id) {
    this.dbCart.doc(id).delete().then((res) => {
    })
  }
  minuss(prod, index) {

    // product.push[prod]
    // this.dbCart.doc(id).onSnapshot((res)=>{
    if (index.data.product[0].quantity === 1) {
      // console.log('You are about to delete your product');
      // this.presentAlertConfirm(index.id);
    } else {
      let num = index.data.product[0].quantity--
      index.data.product[0].cost = index.data.product[0].cost
      let id = index.id
      // console.log('Prod ', prod, ' index', index );
      let product = [prod]
      this.dbCart.doc(id).update({ product: product }).then(res => {
        //   console.log('updated');
      })
    }
  }
  gotocart() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.viewCart = !this.viewCart
          this.viewBackdrop = !this.viewBackdrop
          this.getCart();
        } else {
          this.presentAlertConfirm1();
        }
      })
    }, 0);
  }

  getBackdrop() {
    this.viewBackdrop = !this.viewBackdrop
  }

  getSideMenu() {
    this.viewSideMenu = !this.viewSideMenu
    this.viewBackdrop = !this.viewBackdrop
  }

  getProfile() {
    this.dbProfile.doc(firebase.auth().currentUser.uid).onSnapshot((doc) => {
      if (doc.exists) {
        this.name = doc.data().name;
        this.surname = doc.data().surname;
        // console.log("This is my profile", doc.data());
      } else {
        this.router.navigateByUrl('create-account');
      }
    })
  }
  addtoBusket(view_id, data, id, avail) {
    // console.log("Item availability ", avail);
    if (avail==="Out of stock") {
      this.toastController("Supplier out of stock")
    } else {
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
  }
  delete(id) {
    this.dbWish.doc(id).delete()
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

  reviewed() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.viewReviews = !this.viewReviews
          this.viewBackdrop = !this.viewBackdrop
          this.getWishlist();
        } else {
          this.presentAlertConfirm1();
        }
      })
    }, 0);

  }

  profile() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.navCtrl.navigateRoot('profile');
        } else {
          this.presentAlertConfirm1();
        }
      })
    }, 0);
  }
  getPromo() {
    this.dbProd.where('onSale','==',true).limit(4).onSnapshot((res) => {
      this.sales = [];
      setTimeout(() => {
        this.loaderAnimate = false
      }, 2000);
      res.forEach((doc) => {
        this.sales.push({ data: doc.data(), id: doc.id });
      })
    })
  }
  search(id) {
    this.navCtrl.navigateForward(['search']);
    //this.router.navigateByUrl('search');
  }
  logout() {
    this.authService.logoutUser()
  }

  busket() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.navCtrl.navigateForward('basket');
        } else {
          this.presentAlertConfirm1();
        }
      })
    }, 0);
  }
  wishlist() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.navCtrl.navigateForward('wishlist');
        } else {
          this.presentAlertConfirm1();
        }
      })
    }, 0);

  }

  categories(data) {
    this.router.navigate(['categories', data])
  }
  list(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: 'Kwanga',
        //currency: JSON.stringify(currency),
        // refresh: refresh
      }
    };
    //this.router.navigate(['list', data])
    this.navCtrl.navigateForward(['list', data], navigationExtras);
  }

  listDankie(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        // col: 'Dankie Jesu',
        //currency: JSON.stringify(currency),
        // refresh: refresh
      }
    };
    //this.router.navigate(['list', data])
    this.navCtrl.navigateForward(['list', data], navigationExtras);
  }
  viewitem(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: 'Specials',
        //currency: JSON.stringify(currency),
        // refresh: refresh
      }
    };
    this.navCtrl.navigateForward(['view', id], navigationExtras);
    // this.router.navigate(['view', id])
  }

  goList(data) {
    if (this.sales.length === 0) {
      this.alertSample('We have no promotions so far. Check again later or continue shopping.')
      // this.toastController();
    } else {
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
  }
  async alertSample(message) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: message,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'danger',
        }
      ]
    });
    await alert.present();
  }

  switchView(state) {
    switch (state) {
      case 'd':
        this.buttonActive = true;
        this.Delivery(this.getTotal());
        break;
      case 'c':
        this.buttonActive = false;
        this.notDelivery(this.getTotal());
        break;
    }
  }

}
