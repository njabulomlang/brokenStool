import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.page.html',
  styleUrls: ['./track-orders.page.scss'],
})
export class TrackOrdersPage implements OnInit {
  doc_id:string;
  dbOrder = firebase.firestore().collection('Order');
  productOrder = [];
  name;
  cellno;
  //dbProfile = firebase.firestore().collection('userProfile');
  constructor(public route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.doc_id = params["id"];
     // this.col = params["col"];
    });
  }

  ngOnInit() {
    this.getOrder()
  }
  getOrder() {
    this.dbOrder.doc(this.doc_id).onSnapshot((res)=>{
      //this.userDetails(res.data().userID);
     // console.log('My order', res.data());
      this.productOrder = []
      res.data().product.forEach(item => {
        this.productOrder.push(item);
      });
      console.log('My products ',this.productOrder);
    })  
  }
/*   userDetails(uid) {
    this.dbProfile.doc(uid).onSnapshot((res)=>{
      this.name = res.data().name + ' ' + res.data().surname;
      this.cellno = res.data().cellPhone; 
      console.log('My name ', this.name, 'Cell no ',this.cellno);
    }) 
  } */
}
