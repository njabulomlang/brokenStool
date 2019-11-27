import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';


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
  doc_data: any;
  doc_id: any;
  cartDoc: string;
  quantity: number = 1;
  myProduct = [];
  data = [];
  unitProduct = [];
  my_size: string = '';

  constructor(public router: Router, public route: ActivatedRoute, public toastCtrl: ToastController) {
    // this.docID = this.route.snapshot.paramMap.get('id');
    //this.col = this.route.snapshot.paramMap.get('id');
    //console.log('My collection ', this.route.snapshot.paramMap.get('key'));
    this.doc_id = this.route.snapshot.paramMap.get('view_id');
    this.route.queryParams.subscribe(params => {
      this.doc_data = params["data"];
      this.col = params["col"];
    });

  }

  ngOnInit() {
    //console.log('doc id ', this.doc_id, 'Collection ref ', this.col);
    this.dbProduct.doc("Dankie Jesu").collection(this.col).doc(this.doc_id).onSnapshot((doc) => {
      //console.log('My product ', doc.data());
      this.unitProduct.push({ data: doc.data(), id: doc.id });
      console.log('My product ', this.unitProduct);

    })
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
  sizeChosen(data) {
    this.my_size = data;
    //console.log('My size ', this.my_size);
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
  addToCart(id, details) {
    if (this.my_size === "") {
      this.toastController('Please select your size');
    } else {
      this.dbCart.add({ customerUID: this.customerUID, timestamp: new Date().getTime(), product: [{ product_name: details.name, size: this.my_size, quantity: this.quantity, cost: details.price, unitCost: details.price}] }).then(() => {
        this.router.navigateByUrl('basket');
      })
    }

    /*   this.dbCart.doc(id).onSnapshot((res)=>{
         // this.dbCart.add({ customerUID: this.customerUID, product: [{product_id: this.doc_id, quantity: this.quantity}]}) 
      }) */
    // console.log('Doc id ', id, 'Quantity ', quantity);
    console.log('Product ', details, id);

    /*   details.product.forEach(item => {
        // console.log('Each product ', item);
        this.dbCart.doc(id).update({ product: { quantity: item.quantity + 1, product_id: this.doc_id } })
      }); */
    //this.dbCart.doc(id).update({quantity: quantity + 1})
    //   if (info.size==0) {
    /*   this.dbCart.add({ customerUID: this.customerUID, product: [{product_id: this.doc_id, quantity: 1}]}).then((res) => {
      //this.cartDoc = res.id;
      console.log(res.id);
     }) */
    //   } else {
    //     this.dbCart.doc(id).onSnapshot((mySnap)=>{
    //      /*  mySnap.forEach((doc)=>{
    //         this.quantity += doc.data().quantity;
    //         this.dbCart.doc(doc.id).update({quantity: this.quantity})
    //       }) */
    //     })
    //  //console.log('My doc ', this.cartDoc, 'My product ', this.doc_id);
    //   //  let cartD = this.cartDoc;
    //  /*    info.forEach((doc)=>{
    //       let quantity = doc.data().quantity;
    //       this.dbCart.doc(cartD).update({quantity: quantity + 1})
    //       console.log('Product already exists, must increment only');
    //     }) */
    //    /*  info.forEach((doc)=>{
    //       if (this.doc_id) {

    //       }
    //       this.addProduct(doc.id)
    //     }) */
    //    // let added = false;
    //    /*  for (let i=0; i<info.docs.length, i++;) {
    //       if (info.docs[i].data().product_id === this.doc_id) {
    //         //p.amount += 1;
    //         let quantity = info.docs[i].data().quantity;
    //         this.dbCart.doc(this.cartDoc).update({quantity: quantity + 1})
    //         console.log('Product already exists, must increment only');
    //         //added = true;
    //         break;
    //       }
    //     } */
    //     /* if (!added) {

    //     } */
    //     //this.cartItemCount.next(this.cartItemCount.value + 1);

    //   /*   if (info.size==0) {
    //       this.dbCart.add({ customerUID: this.customerUID }).then((res) => {
    //       this.cartDoc = res.id;
    //     })*/
    //   } 
    // }) 
  }
  viewitem() {
    this.router.navigateByUrl("/basket")
  }
}
