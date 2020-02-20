import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  dbOrder = firebase.firestore().collection('Order');
  dbProfile = firebase.firestore().collection('userProfile');
  dbCart = firebase.firestore().collection('Cart');
  uid = firebase.auth().currentUser.uid;
  myOrder = [];
  doc_id: string;
  refNo: string;
  delCost: number;
  doc_data: object = {};
  buttonActive: boolean = true;
  prodCart = []
  deliveryType: string;
  constructor(public route: ActivatedRoute, public router: Router, public navCtrl: NavController, public alertController: AlertController,
    public alertCtrl: AlertController, public toastCtrl : ToastController) {
    this.doc_id = this.route.snapshot.paramMap.get('docname');
    // console.log('My doc_id ',this.doc_id);
    //this.delCost = 100;

    this.route.queryParams.subscribe(params => {
      this.doc_data = params["data"];
      //this.col = params["col"];
    });
  }

  ngOnInit() {
    this.dbCart.where('customerUID', '==', firebase.auth().currentUser.uid).onSnapshot((info) => {
      // this.cartCount = info.size;
      this.prodCart = [];
      // this.totalCost = 0;
      info.forEach((doc) => {
        this.prodCart.push({ data: doc.data(), id: doc.id });
      })
    })
    setTimeout(() => {
      this.prodCart.forEach((i)=>{
      i.data.product.forEach((z)=>{
        this.myOrder.push(z)
      })
    })
    }, 1000);
    
    // console.log('My order is', this.myOrder);

  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.prodCart.length; i++) {
      let product = this.prodCart[i].data.product;
        product.forEach((item)=>{
          total += (item.cost * item.quantity);
       }) 
      //
    }
    //console.log('My tot ', total);
    return total;
  }
  placeOrder() {
      let docname = 'ZXY' + Math.floor(Math.random() * 10000000);
      this.dbOrder.doc(docname).set({ product: this.myOrder, timestamp: new Date().getTime(), status: 'received', userID: firebase.auth().currentUser.uid, totalPrice: this.getTotal() }).then(() => {
        this.prodCart.forEach((i) => {
          this.dbCart.doc(i.id).delete().then(()=>{
            this.alertConfirm();
          });
        })
      })
  }
  Delivery() {
    // this.myOrder = [];
    this.delCost = 100
    this.deliveryType= "Delivery";
  
  }
  notDelivery() {
    // this.myOrder = []
    this.delCost = 0;
    this.deliveryType= "Collection"
  }
  async alertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Order placed',
      message: 'Thank you for shopping with us',
      buttons: [
         {
          text: 'Ok',
          handler: () => {
            this.navCtrl.navigateRoot('home');
          }
        }
      ]
    });
    await alert.present();
  }
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Address missing',
      message: 'Please setup your physical address',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Okay',
          handler: () => {
            this.navCtrl.navigateForward('profile')
          }
        }
      ]
    });
    await alert.present();
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  goHome() {
    // this.router.navigateByUrl('home');
    if (this.delCost === undefined) {
      this.toastController("Please select delivery type")
      //console.log("My del cost is undefined");
    } else {
      this.placeOrder();
    }
    // this.navCtrl.navigateRoot('home');
  }
  async toastController(message) {
    let toast = await this.toastCtrl.create({ message: message, duration: 2000 });
    return toast.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Delivery',
      // subHeader: 'Subtitle',
      message: 'Please select delivery type',
      buttons: ['OK']
    });
    await alert.present();
  }
  switchView(state) {
    switch (state) {
      case 'd':
        this.buttonActive = true;
        this.Delivery();
        break;
      case 'c':
        this.buttonActive = false;
        this.notDelivery();
        break;
    }
  }
}
