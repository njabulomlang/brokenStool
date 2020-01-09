import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { NavController, ToastController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  dbWishlist = firebase.firestore().collection("Wishlist");
  dbProduct = firebase.firestore().collection("Products");
  dbPromo = firebase.firestore().collection("Specials");
  promo = [];
  myProduct = [];
  collectionName: string = "";
  doc_data: string;
  col: string;
  price: number = 0;
  heartIndex = null;
  loaderMessages = 'Loading...';
  loaderAnimate: boolean = true;
  sortVal;
  sortSale;
  uid = firebase.auth().currentUser.uid;
  dbWish = firebase.firestore().collection('Wishlist');
  myWish: number;
  viewFilter = false;
  viewPrice =  false
  viewReviews = false;
  constructor(public NavCtrl: NavController, public router: Router, public route: ActivatedRoute, public navCtrl: NavController, public toastCtrl: ToastController) {
    this.collectionName = this.route.snapshot.paramMap.get('key');
    //  console.log(this.collectionName);

    this.route.queryParams.subscribe(params => {
      this.doc_data = params["data"];
      this.col = params["col"];
    });
  }

  ngOnInit() {

    setTimeout(() => {
      this.loaderAnimate = false;
    }, 2000);
    //  console.log(); 
    this.getAllProduct();
    this.getSales("name");

    this.dbWishlist.where('customerUID', '==', this.uid).onSnapshot((res1) => {
      this.myWish = res1.size;
    })
  }

  /* list() {
    this.router.navigateByUrl("/list")
  } */
  /*  async productCategory() {
 
   } */
  getSales(order) {
    this.dbPromo.orderBy(order, 'asc').onSnapshot((res) => {
      this.promo = [];
      res.forEach((doc) => {
        this.promo.push({ info: doc.data(), id: doc.id });
      })
      // console.log('Sales arr ',this.promo);

    })
  }
  getAllProduct() {
    this.dbProduct.doc(this.col).collection(this.collectionName).onSnapshot((res) => {
      this.myProduct = [];
      res.forEach((doc) => {
        this.myProduct.push({ info: doc.data(), id: doc.id });
        // console.log('These products ', this.myProduct); 
      })
    })
  }
  /* orderBy() {
    this.getAllProduct(this.sortVal);
    // this.getSales(this.sortVal);
  } */
  sortSales() {
    this.getSales(this.sortSale);
  }
  viewitem(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: this.collectionName,
        category: this.col
        //currency: JSON.stringify(currency),
        // refresh: refresh
      }
    };
    this.navCtrl.navigateForward(['view', id], navigationExtras);
    // this.router.navigate(['view', id])
  }

  wishList(id, data, index) {
    //console.log('My info ', id, data);
    this.heartIndex = index;
    this.dbWishlist.doc(id).get().then((res) => {
      if (res.exists == true) {
        this.toastController('Product already in wishlist..');
      } else {
        this.dbWishlist.doc(res.id).set({ 
          customerUID: firebase.auth().currentUser.uid, price: data.price,
           image: data.pictureLink, name: data.name, id: id, category: this.collectionName }).then(() => {
          this.toastController('Added to wishlist..');
        })
      }
    })
  }
  wishListSale(id, data, index) {
    // console.log('My info ', id, data);
    this.heartIndex = index
    this.dbWishlist.doc(id).get().then((res) => {
      if (res.exists == true) {
        this.toastController('Product already in wishlist..');
      } else {
        this.dbWishlist.doc(res.id).set({
          customerUID: firebase.auth().currentUser.uid, price: data.saleprice, name: data.name,
          image: data.pictureLink, id: id, category: this.collectionName
        }).then(() => {
          this.toastController('Added to wishlist..');
          //this.router.navigateByUrl('basket');
        })
      }
    })
  }
  wishlist() {
    this.router.navigateByUrl('wishlist');
  }
  async toastController(message) {
    let toast = await this.toastCtrl.create({ message: message, duration: 2000 });
    return toast.present();
  }

  goBack() {
    this.navCtrl.pop();
  }
  reviewed() {
   // this.getAllProduct()
    this.viewReviews = !this.viewReviews
  }
  rev() {
    this.viewReviews = !this.viewReviews
  }
  filtered() {
    //console.log(val);
    this.viewFilter = !this.viewFilter
  }

  priced(){
    this.viewPrice = !this.viewPrice
  }
  colorOpt(info) {
    //console.log(info.path[0].innerHTML);
    //this.myProduct.sort(info.path[0].innerHTML);
    // this.myProduct = [];
    this.dbProduct.doc(this.col).collection(this.collectionName).where('color', 'array-contains', info.path[0].innerHTML).onSnapshot((res) => {
      this.myProduct = [];
      res.forEach((doc) => {
        this.myProduct.push({ info: doc.data(), id: doc.id });
        // console.log('These products ', this.myProduct); 
      })
      this.rev();
    })
  }
  setPriceRange(param) {
    this.price = param;
    //console.log("Price range = "+ this.price);
    if (this.price >= 0) {
      this.myProduct = [];
      this.dbProduct.doc(this.col).collection(this.collectionName).where('price', '>=', param)
        .onSnapshot((res) => {
          //console.log(res.docs);
          res.forEach((doc) => {
            // this.db.collection('builderProfile').get().then(snapshot => {
            //   snapshot.forEach(doc => {
            this.myProduct.push({ info: doc.data(), id: doc.id });
            // this.bUID = doc.id;
            //   });
            //   console.log('Builders: ', this.builder);
            // });
          })
        })
    }
  }
}
