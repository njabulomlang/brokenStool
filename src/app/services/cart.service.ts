import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
export interface Product {
  id: number,
  name: string,
  price: number,
  amount: number,
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Champion shirt', price: 300, amount: 1 },
    { id: 1, name: 'Redbat shirt', price: 400, amount: 1 },
    { id: 2, name: 'Jean', price: 700, amount: 1 },
    { id: 3, name: 'Cap', price: 100, amount: 1 }
  ]
  private cart = [];
  private wishlist = [];
  uid
  private cartItemCount = new BehaviorSubject(0);
  constructor(public router: Router) { }
  // getProducts() {
  //   return this.data;
  // }
  // getCart() {
  //   return this.cart;
  // }
  // getCartItemCount() {
  //  /*  firebase.firestore().collection("Cart").onSnapshot((res)=>{
  //     this.cartItemCount = res.size;
  //   }) */
  //   return this.cartItemCount;
  // }

  // addProduct(product) {
  //   //let added = false;
  //   //this.uid = firebase.auth().currentUser.uid;
  //   firebase.firestore().collection("Cart").add({uid: firebase.auth().currentUser.uid}).then((res)=>{
  //   })
    //let added = false;
    /* for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1); */
  }
 /*  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  } */
/*   removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  } */
// }
