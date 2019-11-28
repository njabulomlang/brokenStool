import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.page.html',
  styleUrls: ['./pending-orders.page.scss'],
})
export class PendingOrdersPage implements OnInit {
  dbOrder = firebase.firestore().collection('Order');
  uid = firebase.auth().currentUser.uid;
  myOrder = [];
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.dbOrder.where('userID', '==', this.uid).onSnapshot((res) => {
      this.myOrder = [];
      res.forEach((doc) => {
        this.myOrder.push({ info: doc.data(), id: doc.id });
      })
    })
  }
  orderTrack(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
        data: data,
        //currency: JSON.stringify(currency),
        // refresh: refresh
      }
    }
    this.navCtrl.navigateForward(['track-orders',id], navigationExtras) 
   // console.log('My order id ',id, 'data ', data );
    
  }

}
