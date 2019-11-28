import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
=======
import { Router } from '@angular/router';
>>>>>>> e5426a6d9ccecf08b1bcc57f14382eedcf8a00b1

@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.page.html',
  styleUrls: ['./track-orders.page.scss'],
})
export class TrackOrdersPage implements OnInit {
<<<<<<< HEAD
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
=======

  constructor(private router: Router) { }
>>>>>>> e5426a6d9ccecf08b1bcc57f14382eedcf8a00b1

  ngOnInit() {
    this.getOrder()
  }
<<<<<<< HEAD
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
=======

  done() {
    this.router.navigateByUrl("pending-orders")
  }

>>>>>>> e5426a6d9ccecf08b1bcc57f14382eedcf8a00b1
}
