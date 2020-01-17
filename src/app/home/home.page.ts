import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { ModalController, NavController } from '@ionic/angular';
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
  uid = firebase.auth().currentUser.uid;
  loaderMessages = 'Loading...';
  loaderAnimate: boolean = true;
  sales = [];
  dbWish = firebase.firestore().collection('Wishlist');
  myWish: number;
  constructor(private splashScreen: SplashScreen, private authService: AuthService, private modalCtrl: ModalController, public router: Router, public navCtrl: NavController,
    public notificationService: NotificationsService) {
  }

  ngOnInit() {
    this.notificationService.requestPermission();
    this.getProfile();
    this.getPromo();
    this.dbWish.where('customerUID', '==', this.uid).onSnapshot((res1) => {
      this.myWish = res1.size;
    })
    setTimeout(() => {
      this.splashScreen.hide();
    }, 3000);
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
  
  profile() {
    this.navCtrl.navigateForward('profile');
  }
  getPromo() {
    this.dbSales.onSnapshot((res) => {
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
        col: 'sales',
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
  ozowPayment() {
    
  }
}
