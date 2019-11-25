import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  dbWishlist = firebase.firestore().collection("Wishlist");
  dbProduct = firebase.firestore().collection("Products");
  myProduct = [];
  collectionName : string = "";
  constructor(public router: Router, public route: ActivatedRoute) { 
    this.collectionName = this.route.snapshot.paramMap.get('key')
  }

  ngOnInit() {
  //  console.log(); 
  setTimeout(() => {
    this.dbProduct.doc("DJ").collection(this.collectionName).onSnapshot((res)=>{
      res.forEach((doc)=>{
        this.myProduct.push(doc.data());
        console.log('These products ', this.myProduct); 
      })
    })
  }, 1000);
    
  }

  /* list() {
    this.router.navigateByUrl("/list")
  } */
 /*  async productCategory() {

  } */
  viewitem(){
    this.router.navigateByUrl("/view")
  }

}
