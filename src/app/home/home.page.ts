import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { ModalController, NavController, ToastController, AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { Router, NavigationExtras } from '@angular/router';
//import { FcmService } from '../fcm.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NotificationsService } from '../services/notifications.service';

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
  surname:string = '';
  dbProfile = firebase.firestore().collection("userProfile");
  dbSales = firebase.firestore().collection("Specials");
  dbCart = firebase.firestore().collection('Cart');
  dbOrder = firebase.firestore().collection('Order');
  uid = firebase.auth().currentUser.uid;
  loaderMessages = 'Loading...';
  loaderAnimate: boolean = true;
  sales = [];
  dbWish = firebase.firestore().collection('Wishlist');
  myWish: number;
  viewReviews = false;
  viewBackdrop = false;
  viewCart= false;
  myWishlist = [];
  prodCart = [];
  delCost: number;
  delType: string;
  buttonActive: boolean = true;
  constructor(private splashScreen: SplashScreen, private authService: AuthService, private modalCtrl: ModalController, public router: Router, public navCtrl: NavController,
    public toastCtrl : ToastController, public alertCtrl : AlertController
    // public notificationService: NotificationsService
    ) {
  }

  ngOnInit() {
    // this.notificationService.requestPermission();
    this.getCart();
    this.getProfile();
    this.getPromo();
    this.getWishlist();
    this.dbWish.where('customerUID', '==', this.uid).onSnapshot((res1) => {
      this.myWish = res1.size;
    })
    setTimeout(() => {
      this.splashScreen.hide();
    }, 4000);
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
      this.dbOrder.doc(docname).set({ product: myArr, timestamp: new Date().getTime(), 
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
    this.dbCart.where('customerUID', '==', this.uid).onSnapshot((info) => {
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
        total = tot+100
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
  gotocart(){
    this.viewCart = !this.viewCart
    this.viewBackdrop = !this.viewBackdrop
  }

  getBackdrop(){
    this.viewBackdrop = !this.viewBackdrop
  }
  
  getProfile() {
    this.dbProfile.doc(this.uid).onSnapshot((doc) => {
      if (doc.exists) {
        this.name = doc.data().name;
        this.surname = doc.data().surname;
        // console.log("This is my profile", doc.data());
      } else {
        this.router.navigateByUrl('create-account');
      }
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
  getWishlist() {
    this.dbWish.where('customerUID', '==', this.uid).onSnapshot((res) => {
      this.myWishlist = [];
      res.forEach((doc) => {
        this.myWishlist.push({ info: doc.data(), id: doc.id });
      })
    })
  }
  reviewed() {
    this.viewReviews = !this.viewReviews
    this.viewBackdrop = !this.viewBackdrop
  }

  profile() {
    this.navCtrl.navigateForward('profile');
  }
  getPromo() {
    this.dbSales.limit(4).onSnapshot((res) => {
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
  addToCart(product) {

    //this.uid = firebase.auth().currentUser.uid;
    /*   if(!this.uid) {
        console.log('Cannot read uid');
      } else {
        console.log('Uid found..');
        
      } */
    //this.cartService.addProduct(product);
    this.animateCSS('tada', true);
    /*  if(this.uid==null || this.uid==undefined) {
       this.router.navigateByUrl('login')
     } else {
       this.cartService.addProduct(product);
     this.animateCSS('tada', true);
     }
      */
  }
  busket() {
    this.navCtrl.navigateForward('basket');
  }
  wishlist() {
    this.navCtrl.navigateForward('wishlist');
  }
  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)

    //https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }
  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }

  categories(data) {
    // console.log(data);
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
        col: 'Dankie Jesu',
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
