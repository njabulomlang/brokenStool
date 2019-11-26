import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  dbProduct = firebase.firestore().collection('Products');
  dbCart = firebase.firestore().collection('Cart');
  customerUID = firebase.auth().currentUser.uid;
  cartDoc: string = '';
  constructor() { }

  ngOnInit() {
    this.dbCart.where('customerUID','==',this.customerUID).onSnapshot((info)=>{
      if (info.size==0) {
        this.dbCart.add({ customerUID: this.customerUID, product: []}).then((res) => {
        this.cartDoc = res.id;
      })
      } else {
        info.forEach((doc)=>{
          this.addProduct(doc.id)
        })
        
      /*   if (info.size==0) {
          this.dbCart.add({ customerUID: this.customerUID }).then((res) => {
          this.cartDoc = res.id;
        })*/
      } 
    })   
  }
  addProduct(doc) {
    console.log('My doc is ', doc);
    
  }
}
