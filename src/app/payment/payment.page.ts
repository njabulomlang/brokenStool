import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

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
  constructor(public route: ActivatedRoute, public router: Router, public navCtrl: NavController) { 
   this.doc_id = this.route.snapshot.paramMap.get('docname');
   console.log('My doc_id ',this.doc_id);
  }

  ngOnInit() {
    this.dbOrder.doc(this.doc_id).onSnapshot((res)=>{
      this.myOrder.push(res.data());
      this.refNo = res.id;
    })
    console.log('My order is', this.myOrder);
    
  }
  getTotal() {
    let total = 0;
    for(let i = 0; i < this.myOrder.length; i++){
        let product = this.myOrder[i].totalPrice;
        total = product+100
       // console.log(product);
       /*   product.forEach((item)=>{
           total += (item.cost * item.quantity);
        })  */
       //
    }
    //console.log('My tot ', total);
    return total;
}
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  goHome() {
   // this.router.navigateByUrl('home');
   this.navCtrl.navigateRoot('home');
  }
}
