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
  cartCount: number = 0;
  prodCart = [];
  totalCost: number = 0;
  prodCount:number = 0;
  constructor() { }

  ngOnInit() {
    this.dbCart.where('customerUID', '==', this.customerUID).onSnapshot((info) => {
      this.cartCount = info.size;
      /*  if (info.size==0) {
         this.dbCart.add({ customerUID: this.customerUID, product: []}).then((res) => {
         this.cartDoc = res.id;
       })
       } else { */
        this.prodCart = [];
        this.totalCost = 0;
      info.forEach((doc) => {
        this.prodCart.push({data:doc.data(), id:doc.id});
        //this.addProduct(doc.id)
        for (let car of this.prodCart) {
          car.data.product.forEach((item)=>{
          this.totalCost =  Number(this.totalCost + item.cost);
          })
         }
      })
      //let sum:number = 0;
     
       //console.log('My numbers ', this.totalCost);
     // console.log('My sum..',this.totalCost)
      /*   if (info.size==0) {
          this.dbCart.add({ customerUID: this.customerUID }).then((res) => {
          this.cartDoc = res.id;
        })*/
      //   } 
    })

  }

  addProduct(doc) {
    console.log('My doc is ', doc);
  }
  removeProd(id) {
    console.log('Doc id ', id);
    this.dbCart.doc(id).delete().then((res)=>{
      
    })
  }
  placeOrder() {
    
  }
  plus(prod ,index) {
    let num = index.data.product[0].quantity++
    let id = index.id
  // console.log('Prod ', prod, ' index', index );
    let product = [prod]
    // product.push[prod]
  
  
  // this.dbCart.doc(id).onSnapshot((res)=>{
     this.dbCart.doc(id).update({product:product}).then(res => {
       console.log('updated');
       
     })
  // })
    //
    //console.log('Quan incre ', quan);
  }
  minus(id ,quantity) {
    // this.prodCount = quantity+1
    // this.dbCart.doc(id).update({product:{quantity: this.prodCount}})
    //console.log('Quan decr ', quan);
  }
}
