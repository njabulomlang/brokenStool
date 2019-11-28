import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.page.html',
  styleUrls: ['./pending-orders.page.scss'],
})
export class PendingOrdersPage implements OnInit {
  dbOrder = firebase.firestore().collection('Order');
  uid = firebase.auth().currentUser.uid;
  myOrder = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.dbOrder.where('userID','==',this.uid).onSnapshot((res)=>{
      this.myOrder = [];
      res.forEach((doc)=>{
        this.myOrder.push({info:doc.data(), id: doc.id});
      })
    })
  }


  ViewPending() {
    this.router.navigateByUrl("track-orders")
  }

}
