import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
  dbHistory = firebase.firestore().collection('orderHistory');
  uid = firebase.auth().currentUser.uid;
  orderHistory=[];
  loaderMessages = 'Loading...';
  loaderAnimate:boolean = true;
  constructor(public NavCtrl: NavController, private router: Router) { }

  ngOnInit() {
  
    this.getAll();
  }

  viewReceipt(id) {
   // console.log('My id ',id);
  
    this.router.navigate(["receipts", id])
  }
  getAll() {
    this.dbHistory.where('uid','==',this.uid).onSnapshot((res)=>{
      this.orderHistory =[];
      setTimeout(() => {
        this.loaderAnimate = false;
      }, 2000);
      res.forEach((doc)=>{
        this.orderHistory.push(doc.data());
      })
    })
  }

  goBack(){
    this.NavCtrl.pop()
  }
}
