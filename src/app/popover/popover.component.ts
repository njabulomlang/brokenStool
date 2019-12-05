import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  dbRate = firebase.firestore().collection('productRate');

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    console.log('Collection ', this.navParams.get('col'), 'Doc ', this.navParams.get('doc'));

  }
  logRatingChange(rating) {
    let total = 0;
    this.dbRate.where('product','==',this.navParams.get('doc')).onSnapshot((res) => {
      for (let j = 0; j < res.docs.length; j++) {
          total = rating+res.docs[j].data().rating/res.size+1
        }
    })
    this.dbRate.add({ rating: total, uid: firebase.auth().currentUser.uid, product: this.navParams.get('doc'), category:this.navParams.get('col')})
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
