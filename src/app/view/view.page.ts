import { Component, OnInit } from '@angular/core';
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
  doc_data: any;
  doc_id: any;
  cartDoc: string;
  quantity: number = 1;
  myProduct = [];
  data = [];
  unitProduct = [];
  my_size: string = '';

  constructor(public router: Router, public route: ActivatedRoute, public toastCtrl: ToastController, public popoverController: PopoverController, public navCtrl: NavController) {
    this.doc_id = this.route.snapshot.paramMap.get('view_id');
    this.route.queryParams.subscribe(params => {
      this.doc_data = params["data"];
      this.col = params["col"];
    });
  }

  ngOnInit() {
   // console.log('my collection ', this.col, 'my data', this.doc_data, 'my docid');
    
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
  toBusket() {
    this.router.navigateByUrl('basket');
  }
  addToCart(id, details) {
    if (this.my_size === "") {
      this.toastController('Please select your size');
    } else {
      this.dbCart.add({ customerUID: this.customerUID, timestamp: new Date().getTime(), product: [{ product_name: details.name, size: this.my_size, quantity: this.quantity, cost: details.price, unitCost: details.price}] }).then(() => {
        this.toastController('Added to busket')
        //this.router.navigateByUrl('basket');
      })
    }

    /*   this.dbCart.doc(id).onSnapshot((res)=>{
         // this.dbCart.add({ customerUID: this.customerUID, product: [{product_id: this.doc_id, quantity: this.quantity}]}) 
      }) */
    // console.log('Doc id ', id, 'Quantity ', quantity);
    console.log('Product ', details, id);
  }

  goBack(){
    this.navCtrl.pop()
  }
  viewitem() {
    this.router.navigateByUrl("/basket")
  }
}
