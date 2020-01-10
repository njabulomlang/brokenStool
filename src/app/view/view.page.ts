import { Component, OnInit, Renderer2 } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, PopoverController, NavController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  dbProduct = firebase.firestore().collection('Products');
  dbCart = firebase.firestore().collection('Cart');
  customerUID = firebase.auth().currentUser.uid;
  docID: string;
  col: string;
  doc_data: [];
  doc_id: any;
  cartDoc: string;
  quantity: number = 1;
  myProduct = [];
  data = [];
  unitProduct = [];
  my_size: string = '';
  sizeIndex = null;
  colorIndex = null;
  color: string = '';
  myRate: number = 0;
  dbRate = firebase.firestore().collection('productRate');
  dbSales = firebase.firestore().collection('Specials');
  mySale = [];
  category: string = '';
  starRating = document.getElementsByClassName('ionic4-star-rating')
  
  // colorIndex = null;
  constructor(public router: Router, public route: ActivatedRoute, public toastCtrl: ToastController, public popoverController: PopoverController, public navCtrl: NavController,
    public render: Renderer2) {
    this.doc_id = this.route.snapshot.paramMap.get('view_id');
    this.route.queryParams.subscribe(params => {
      this.doc_data = params["data"];
      this.col = params["col"];
      this.category = params["category"];
    });
  }

  ngOnInit() {
    // console.log(this.doc_data);
    setTimeout(()=>{
      //console.log(this.starRating);
      
      let starButtons =  this.starRating[0].children
      for (let i = 0; i < starButtons.length; i++) {
        //console.log(this.starRating[0].children[i]);
        this.render.setStyle(this.starRating[0].children[i], 'outline', 'none');
      }
      
    }, 500)
    // console.log('my collection ', this.col, 'my data', this.doc_data, 'my docid');
    this.dbRate.where('product', '==', this.doc_id).onSnapshot((res) => {
      // this.myRatings = [];
      if (res.size === 0) {
        this.myRate = 0
      } else {
        res.forEach((doc) => {
          this.myRate = doc.data().rating / res.size;
        })
      }

      // console.log('my rate ', this.myRate);

    })
    //console.log('doc id ', this.doc_id, 'Collection ref ', this.col);
    // console.log(this.col);
    if (this.col === 'sales') {
      this.getSpecial();
    } else {
      this.getProduct();
    }

    // setTimeout(() => {
    //let data = [] ; 
    /* this.dbCart.where('customerUID', '==', this.customerUID).onSnapshot((snap) => {
      // console.log('My snapshot ', snap);
      snap.forEach((doc) => {
        this.myProduct = []
        this.data = doc.data().product
        console.log('My data ', this.data);
        this.data.forEach((item) => {
          if (item.product_id == this.doc_id) {
            this.myProduct.push({ info: doc.data(), id: doc.id })
          }
        });
        console.log('My products ', this.myProduct);
      })
    }) */


    // }, 1000);

  }
  getProduct() {
    this.dbProduct.doc(this.category).collection(this.col).doc(this.doc_id).onSnapshot((doc) => {
      //console.log('My product ', doc.data());
      this.unitProduct.push({ data: doc.data(), id: doc.id });
      // console.log('My product ', this.unitProduct);

    })
  }
  getSpecial() {
    this.dbSales.doc(this.doc_id).onSnapshot((res) => {
      this.mySale.push({ data: res.data(), id: res.id });
      // console.log('My product ', this.mySale);
    })
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        col: this.col,
        doc: this.doc_id
      }
    });
    return await popover.present();
  }

  sizeChosen(data, index) {
    // console.log(index);
    this.sizeIndex = index
    this.my_size = data;
    //console.log('My size ', this.my_size);
  }

  colorChosen(color, index) {
    this.color = color;
    this.colorIndex = index
    // console.log("color", index);
  }
  plus() {
    //console.log('Quantity ', quantity); 
    this.quantity += 1
  }
  minus() {
    if (this.quantity <= 1) {
      this.toastController('Quantity must be positive')
    } else {
      this.quantity -= 1
    }
  }
  async toastController(message) {
    let toast = await this.toastCtrl.create({ message: message, duration: 2000 });
    return toast.present();
  }
  toBusket() {
    this.router.navigateByUrl('basket');
  }
  addToCart(id, details) {
    if (this.my_size === "" || this.color === "") {
      this.toastController('Please select your size');
    } else {
      this.dbCart.add({
        customerUID: this.customerUID, timestamp: new Date().getTime(), product: [{
          product_name: details.name, size: this.my_size,
          quantity: this.quantity, cost: details.price, unitCost: details.price, picture: details.pictureLink,
          color: this.color
        }]
      }).then(() => {
        this.toastController('Added to busket')
        //this.router.navigateByUrl('basket');
      })
    }

    /*   this.dbCart.doc(id).onSnapshot((res)=>{
         // this.dbCart.add({ customerUID: this.customerUID, product: [{product_id: this.doc_id, quantity: this.quantity}]}) 
      }) */
    // console.log('Doc id ', id, 'Quantity ', quantity);
    // console.log('Product ', details, id);
  }
  addSaleToCart(id, details) {
    let descr = "";
    if (this.my_size === "") {
      descr = "size"
    } else if (this.color === "") {
      descr = "color"
    }
    if (this.my_size === "" || this.color === "") {
      this.toastController('Missing selection of ' + descr);
    } else {
      this.dbCart.add({
        customerUID: this.customerUID, timestamp: new Date().getTime(), product: [{
          product_name: details.name, size: this.my_size,
          quantity: this.quantity, cost: details.saleprice, picture: details.pictureLink,
          color: this.color
        }]
      }).then(() => {
        this.toastController('Added to busket')
        //this.router.navigateByUrl('basket');
      })
    }
  }
  goBack() {
    this.navCtrl.pop()
  }
  viewitem() {
    this.router.navigateByUrl("/basket")
  }
}
