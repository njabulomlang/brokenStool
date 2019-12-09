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
  myOrder = [];
  doc_id:string;
  refNo:string;
  delCost:number;
  buttonActive: boolean = true
  constructor(public route: ActivatedRoute, public router: Router, public navCtrl: NavController, public alertController:AlertController) { 
   this.doc_id = this.route.snapshot.paramMap.get('docname');
   console.log('My doc_id ',this.doc_id);
   //this.delCost = 100;
  }

  ngOnInit() {
    this.dbOrder.doc(this.doc_id).onSnapshot((res)=>{
      this.myOrder.push(res.data());
      this.refNo = res.id;
    })
   // console.log('My order is', this.myOrder);
    
  }
  getTotal() {
    let total = 0;
    for(let i = 0; i < this.myOrder.length; i++){
        let product = this.myOrder[i].totalPrice;
        total = product+this.delCost
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
  this.myOrder=[];
  this.delCost=100
  this.dbOrder.doc(this.doc_id).update({deliveryType:"Delivery",deliveryCost:this.delCost})
}
notDelivery(){
  this.myOrder=[]
  this.delCost=0
  this.dbOrder.doc(this.doc_id).update({deliveryType:"Collect",deliveryCost:this.delCost})
}
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  goHome() {
   // this.router.navigateByUrl('home');
   if (this.delCost===undefined) {
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
  switchView (state) {
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
