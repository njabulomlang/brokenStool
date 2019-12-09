import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NavController, Platform } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.page.html',
  styleUrls: ['./pending-orders.page.scss'],
})
export class PendingOrdersPage implements OnInit {
  dbOrder = firebase.firestore().collection('Order');
  dbUserProfile = firebase.firestore().collection('userProfile');
  uid = firebase.auth().currentUser.uid;
  myOrder = [];
  loaderMessages = 'Loading...';
  loaderAnimate:boolean = true;
  storageRef = firebase.storage().ref();
  pdfObj = null;
  reciept = null;
  constructor(public navCtrl: NavController, ) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaderAnimate = false;
    }, 2000);
    this.getAllOrders();
  }

  orderTrack(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
        data: data,
        reciept: this.reciept
        //currency: JSON.stringify(currency),
        // refresh: refresh
      }
    }
    this.navCtrl.navigateForward(['track-orders', id], navigationExtras)
    // console.log('My order id ',id, 'data ', data )
  }
  getAllOrders() {
    this.dbOrder.where('userID', '==', this.uid).onSnapshot((res) => {
      this.myOrder = [];
      res.forEach((doc) => {
        this.myOrder.push({ info: doc.data(), id: doc.id });
      })
    })
  }
  /*   removeOrder() {
     this.myOrder.forEach((i) => {
       // this.getOrder(i.id);
       this.dbHistory.doc(i.id).set({ date: new Date().getTime(), reciept: this.reciept }).then(() => {
         this.dbOrder.doc(i.id).delete();
       })
     })
   }  */
  
  getOrder(id) {
 
  }

  goBack(){
    this.navCtrl.pop()
  }


}
