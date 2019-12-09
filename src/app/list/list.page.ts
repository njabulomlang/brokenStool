import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { NavController, ToastController } from '@ionic/angular';
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
  doc_data: string;
  col: string;
  heartIndex = null;
  constructor(public NavCtrl: NavController, public router: Router, public route: ActivatedRoute, public navCtrl: NavController, public toastCtrl: ToastController) { 
    this.collectionName = this.route.snapshot.paramMap.get('key');
    this.route.queryParams.subscribe(params => {
      this.doc_data = params["data"];
      this.col = params["col"];
    });
  }

  ngOnInit() {
  //  console.log(); 
  setTimeout(() => {
    this.dbProduct.doc(this.col).collection(this.collectionName).onSnapshot((res)=>{
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
  viewitem(id, data){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          data: data,
          col: this.collectionName,
          //currency: JSON.stringify(currency),
         // refresh: refresh
      }
  };
  this.navCtrl.navigateForward(['view', id], navigationExtras);
   // this.router.navigate(['view', id])
  }
  wishList(id, data, index) {
    console.log('My info ', id, data);
    this.heartIndex = index
    this.dbWishlist.add({customerUID: firebase.auth().currentUser.uid,price: data.price,name: data.name, id:id, category: this.collectionName}).then(() => {
      this.toastController('Added to wishlist..');
      //this.router.navigateByUrl('basket');
    }) 
  }
  wishlist() {
    this.router.navigateByUrl('wishlist');
  }
  async toastController(message) {
    let toast = await this.toastCtrl.create({ message: message, duration: 2000 });
    return toast.present();
  }

  goBack(){
    this.navCtrl.pop()
  }
}
