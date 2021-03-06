import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  dbProducts = firebase.firestore().collection('Products');
  dbCategory = firebase.firestore().collection('category');
  txtSearch: string = '';
  mySearch = [];
  ports: Port[];
  port: Port;
  loaderMessages = 'Loading...';
  loaderAnimate:boolean;
  constructor(public navCtrl: NavController) { 
    
  }
  ngOnInit() {
    //this.searchByName();
    this.getCategory();
  }
  getCategory() {
    this.dbCategory.onSnapshot((res) => {
      this.ports = []; 
      for (let i = 0; i < res.docs.length; i++) {
        this.ports.push({ id:i, name: res.docs[i].data().name});
      }
    })
  }
  searchByName(name) {
    this.loaderAnimate = true;
    this.dbProducts.where('category','==', name).onSnapshot((res) => {
      this.mySearch = [];
      setTimeout(() => {
        this.loaderAnimate = false;
      }, 2000);
      res.forEach((doc) => {
        //console.log('My res ', doc.data());
        this.mySearch.push({info:doc.data(), id: doc.id});
      })
    })
  }
  inputChange(itemname) {
    //console.log(itemname);
    // console.log(this.txtSearch.charAt(0).toUpperCase()+this.txtSearch.substring(1).toLowerCase());
   // this.searchByName(this.txtSearch.charAt(0).toUpperCase() + this.txtSearch.substring(1).toLowerCase())
  }
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.txtSearch = event.value.name;
    this.searchByName(event.value.name)
  //  console.log('port:', event.value.name);
  }
  viewitem(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: data.brand,
        category: this.txtSearch
      }
    };
    this.navCtrl.navigateForward(['view', id], navigationExtras);
    // this.router.navigate(['view', id])
  }

  goBack(){
    this.navCtrl.pop()
  }
}
