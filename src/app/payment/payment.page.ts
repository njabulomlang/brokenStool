import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  dbOrder = firebase.firestore().collection('Order');
  dbProfile = firebase.firestore().collection('userProfile');
  uid = firebase.auth().currentUser.uid;
  myOrder = [];
  doc_id: string;
  refNo: string;
  delCost: number;
  doc_data: object = {};
  buttonActive: boolean = true;

  constructor(public route: ActivatedRoute, public router: Router, public navCtrl: NavController, public alertController: AlertController,
    public alertCtrl: AlertController) {
    this.doc_id = this.route.snapshot.paramMap.get('docname');
    // console.log('My doc_id ',this.doc_id);
    //this.delCost = 100;

    this.route.queryParams.subscribe(params => {
      this.doc_data = params["data"];
      //this.col = params["col"];
    });
  }

  ngOnInit() {
    this.dbOrder.doc(this.doc_id).onSnapshot((res) => {
      this.myOrder.push(res.data());
      this.refNo = res.id;
    })
    // console.log('My order is', this.myOrder);

  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.myOrder.length; i++) {
      let product = this.myOrder[i].totalPrice;
      total = product + this.delCost
      // console.log(product);
      /*   product.forEach((item)=>{
          total += (item.cost * item.quantity);
       })  */
      //
    }
    //console.log('My tot ', total);
    return total;
  }
  Delivery() {
    this.myOrder = [];
    this.delCost = 100
    this.dbProfile.doc(this.uid).onSnapshot((res) => {
      if (res.data().address === '') {
        //this.navCtrl.navigateForward('')
        this.presentAlertConfirm();
      } else {
        this.dbOrder.doc(this.doc_id).update({ deliveryType: "Collection", deliveryCost: this.delCost })
      }
    })
  }
  notDelivery() {
    this.myOrder = []
    this.delCost = 0;
    // this.dbProfile.doc(this.uid).onSnapshot((res)=>{
    //   if (res.data().address==='') {
    //     //this.navCtrl.navigateForward('')
    //     this.presentAlertConfirm();
    //   } else {

    //   }
    // })
    this.dbOrder.doc(this.doc_id).update({ deliveryType: "Collection", deliveryCost: this.delCost })
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
      this.presentAlert();
      //console.log("My del cost is undefined");
    } else {
      this.navCtrl.navigateRoot('home');
    }
    // this.navCtrl.navigateRoot('home');
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
