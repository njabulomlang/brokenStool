import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  category : string;
  colDef : string;
  uid = firebase.auth().currentUser.uid;
  dbWish = firebase.firestore().collection('Wishlist');
  myWish:number;
  constructor(public NavCtrl: NavController, public router: Router, public route: ActivatedRoute, public navCtrl : NavController) {

   // console.log('My data', this.route.snapshot.paramMap.get('data').toUpperCase());
    this.category = this.route.snapshot.paramMap.get('data').toUpperCase();
   }

  ngOnInit() {
    if(this.category==='SUMMER' || this.category==='WINTER') {
     // console.log('This is dankie jesu brand');
     this.colDef = 'Dankie Jesu';
    } else if(this.category==='KWANGA'){
     // console.log('It is kwanga you sh!t');
     this.colDef = 'Kwanga';
    } else {
      //console.log('Sales my man...');
      this.colDef = 'Sales';
    }

    this.dbWish.where('customerUID', '==',this.uid).onSnapshot((res1)=>{
      this.myWish = res1.size;
    })
  }

  list(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          data: data,
          col: this.colDef,
          //currency: JSON.stringify(currency),
         // refresh: refresh
      }
  };
    //this.router.navigate(['list', data])
    this.navCtrl.navigateForward(['list', data], navigationExtras);
  }
  wishlist() {
    this.router.navigateByUrl('wishlist');
  }

  goBack(){
    this.navCtrl.pop()
  }
}
