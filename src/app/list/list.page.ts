import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
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
  constructor(public router: Router, public route: ActivatedRoute, public navCtrl: NavController) { 
    this.collectionName = this.route.snapshot.paramMap.get('key')
  }

  ngOnInit() {
  //  console.log(); 
  setTimeout(() => {
    this.dbProduct.doc("Dankie Jesu").collection(this.collectionName).onSnapshot((res)=>{
      this.myProduct = [];
      res.forEach((doc)=>{
        this.myProduct.push({info:doc.data(), id : doc.id});
       // console.log('These products ', this.myProduct); 
      })
    })
  }, 1000);
    
  }

  /* list() {
    this.router.navigateByUrl("/list")
  } */
 /*  async productCategory() {

  } */
  viewitem(id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          doc_id: id,
          col: this.collectionName,
          //currency: JSON.stringify(currency),
         // refresh: refresh
      }
  };
  this.navCtrl.navigateForward(['view', id], navigationExtras);
   // this.router.navigate(['view', id])
  }

}
