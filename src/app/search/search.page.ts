import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  dbProducts = firebase.firestore().collection('Products')
  txtSearch: string = '';
  mySearch = [];
  constructor(public navCtrl: NavController) { }
  ngOnInit() {
    //this.searchByName();
  }
  searchByName(name) {
    // String(name).toLowerCase();
    this.dbProducts.doc('Dankie Jesu').collection(name).onSnapshot((res) => {
      this.mySearch = [];
      res.forEach((doc) => {
        console.log('My res ', doc.data());
        this.mySearch.push({info:doc.data(), id: doc.id});
      })
    })
  }
  inputChange(itemname) {
    // console.log(this.txtSearch.charAt(0).toUpperCase()+this.txtSearch.substring(1).toLowerCase());
    this.searchByName(this.txtSearch.charAt(0).toUpperCase() + this.txtSearch.substring(1).toLowerCase())
  }
  viewitem(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: this.txtSearch.charAt(0).toUpperCase() + this.txtSearch.substring(1).toLowerCase(),
        //currency: JSON.stringify(currency),
        // refresh: refresh
      }
    };
    this.navCtrl.navigateForward(['view', id], navigationExtras);
    // this.router.navigate(['view', id])
  }
}
