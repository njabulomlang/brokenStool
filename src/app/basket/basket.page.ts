import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AlertController, ToastController, NavController } from '@ionic/angular';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  dbProduct = firebase.firestore().collection('Products');
  dbCart = firebase.firestore().collection('Cart');
  dbOrder = firebase.firestore().collection('Order');
  // customerUID = firebase.auth().currentUser.uid;
  cartDoc: string = '';
  cartCount: number = 0;
  prodCart = [];
  totalCost: number = 0;
  prodCount: number = 0;
  doc_id: string = '';
  loaderMessages = 'Loading...';
  loaderAnimate:boolean = true;
  viewCart= false;
  viewBackdrop = false;
  alertView: boolean = false;
  constructor(public NavCtrl: NavController, public alertCtrl: AlertController, public router: Router, public toastCtrl: ToastController,
     private localSt:LocalStorageService) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaderAnimate = false;
    }, 2000);
    this.checkUser();
    setTimeout(() => {
      this.getTotal();
    }, 1000);
  }
  checkUser() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.dbCart.where('customerUID', '==', res.uid).onSnapshot((info) => {
            this.cartCount = info.size;
            this.prodCart = [];
            this.totalCost = 0;
            info.forEach((doc) => {
              this.prodCart.push({ data: doc.data(), id: doc.id });
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
      header: 'Alert',
      message: 'Please Sign-in first',
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
            this.NavCtrl.navigateForward('login');
          }
        }
      ]
    });

    await alert.present();
  }
  gotocart(){
    this.viewCart = !this.viewCart
    this.viewBackdrop = !this.viewBackdrop
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
  wishlist() {
    this.router.navigateByUrl('wishlist');
  }
  addProduct(doc) {
    console.log('My doc is ', doc);
  }
  removeProd(id) {
    //console.log('Doc id ', id);
    this.dbCart.doc(id).delete().then((res) => {
    })
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
    } else {
      let docname = 'ZXY' + Math.floor(Math.random() * 10000000);
      this.dbOrder.doc(docname).set({ product: myArr, timestamp: new Date().getTime(), status: 'received', userID: firebase.auth().currentUser.uid, totalPrice: this.getTotal() }).then(() => {
        doc.forEach((id) => {
          this.dbCart.doc(id).delete();
        })
        this.router.navigate(['payment', docname])
      })
    }
  }
  async toastController(message) {
    let toast = await this.toastCtrl.create({ message: message, duration: 2000 });
    return toast.present();
  }
  async presentAlertConfirm(id) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Do you want to remove this product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Okay',
          handler: () => {
            //console.log('Id is ', id);
            this.removeProd(id)
          }
        }
      ]
    });

    await alert.present();
  }

  plus(prod, index) {
    let num = index.data.product[0].quantity++
    index.data.product[0].cost = index.data.product[0].cost
    let id = index.id

    //console.log('Prod ', prod);
    let product = [prod]
    // product.push[prod]

    //calculate new cost
    // 
    //
    //
    //

    // this.dbCart.doc(id).onSnapshot((res)=>{
    this.dbCart.doc(id).update({ product: product }).then(res => {
      // console.log('updated');

    })
    // })
    //
    //console.log('Quan incre ', quan);
  }
  minus(prod, index) {

    // product.push[prod]
    // this.dbCart.doc(id).onSnapshot((res)=>{
    if (index.data.product[0].quantity === 1) {
      // console.log('You are about to delete your product');
      this.presentAlertConfirm(index.id);
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

    // this.prodCount = quantity+1
    // this.dbCart.doc(id).update({product:{quantity: this.prodCount}})
    //console.log('Quan decr ', quan);
  }

  goback(){
    this.NavCtrl.pop();
  }
}
