import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  dbRate = firebase.firestore().collection('productRate');
  rateNow: boolean;
 // myRatings = [];
  myRate:number=0;
  constructor(private navParams: NavParams, public popCtrl: PopoverController) { }

  ngOnInit() {
     this.dbRate.where('product', '==', this.navParams.get('doc')).onSnapshot((res) => {
     // this.myRatings = [];
      res.forEach((doc)=>{
        this.myRate = doc.data().rating/res.size;
      })
      if (res.size==0) {
        this.rateNow = false;
      } else {
        this.rateNow = true;
      }
     // console.log('Read only ',this.rateNow);
      
     /*  res.forEach((doc) => {
        this.myRatings.push(doc.data().rating)
      }) */
    }) 
    // console.log('Collection ', this.navParams.get('col'), 'Doc ', this.navParams.get('doc'));
  }
  logRatingChange(rating) {
    let total = 0;
    let arr = [5, 3, 5, 1, 4];
    let avg = 0;
    //let total = 0;
    this.dbRate.add({ rating: rating, uid: firebase.auth().currentUser.uid, product: this.navParams.get('doc'), category: this.navParams.get('col') }).then((res) => {
      // console.log("my data");
    })
    // this.dbRate.where('product', '==', this.navParams.get('doc')).onSnapshot((res) => {
    //   res.forEach((doc) => {
    //     if (doc.data().uid == firebase.auth().currentUser.uid && doc.data().product == this.navParams.get('doc')) {
    //       console.log('You have rated this product');
    //      // this.rateNow === false;
    //     } else {
    //      // this.rateNow === true;
        
    //     }
    //   })
    //   /* for (let j = 0; j < res.docs.length; j++) {
    //       avg += rating/res.size;
    //     } */
    //   // total = rating + 

    // })

    /*    for (let i = 0; i < arr.length; i++) {
         //let product = arr.data.product;
         // console.log(product);
       //  product.forEach((item) => {
           total += arr[i]/5;
       //  })
         //
       } */
    console.log('My tot ', total);

    return total;

    //console.log('My arr ', arr);
    /*   arr.forEach((i)=>{
        console.log('Rate ',i);
        
      }) */
    /*  this.dbRate.where('product','==',this.navParams.get('doc')).onSnapshot((res) => {
       for (let j = 0; j < res.docs.length; j++) {
           total = rating+res.docs[j].data().rating/res.size+1
         }
     }) */
    // this.dbRate.add({ rating: total, uid: firebase.auth().currentUser.uid, product: this.navParams.get('doc'), category:this.navParams.get('col')})
  }
  dismissPopover() {
    this.popCtrl.dismiss();
  }
  /*  getTotal() {
     let total = 0;
     for (let i = 0; i < this.prodCart.length; i++) {
       let product = this.prodCart[i].data.product;
       // console.log(product);
       product.forEach((item) => {
         total += (item.cost * item.quantity);
       })
       //
     }
     //console.log('My tot ', total);
 
     return total;
   } */
}
