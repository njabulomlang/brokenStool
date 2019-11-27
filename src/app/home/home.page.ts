import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
 import * as firebase from 'firebase';
import { CartService } from '../services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild('cart', {static: false, read: ElementRef}) fab: ElementRef;
  products = [];
  cart = []; 
  cartItemCount: BehaviorSubject<number>;
  //uid;
  name;
  surname;
  dbProfile = firebase.firestore().collection("userProfile");
  uid = firebase.auth().currentUser.uid;
  constructor(private authService: AuthService, private cartService: CartService, private modalCtrl: ModalController, public router: Router) {
// this.uid = firebase.auth().currentUser.uid
  }

  ngOnInit() {
     this.dbProfile.doc(this.uid).get().then((doc)=>{
      if(doc.exists) {
        this.name = doc.data().name;
        this.surname = doc.data().surname;
       // console.log("This is my profile", doc.data());
      } else {
        this.router.navigateByUrl('create-account');
      }
    }).catch((err)=>{
     console.log("Error ", err);
    }) 
/*     this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount(); */
  } 
  profile() {
    this.router.navigateByUrl('profile');
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
    this.router.navigateByUrl('basket');
  }
  wishlist() {
    this.router.navigateByUrl('wishlist');
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
    console.log(data);
    this.router.navigate(['categories', data])
  }
  
}
