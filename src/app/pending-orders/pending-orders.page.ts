import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NavController, Platform } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.page.html',
  styleUrls: ['./pending-orders.page.scss'],
})
export class PendingOrdersPage implements OnInit {
  dbOrder = firebase.firestore().collection('Order');
  dbUserProfile = firebase.firestore().collection('userProfile');
  uid = firebase.auth().currentUser.uid;
  myOrder = [];
  loaderMessages = 'Loading...';
  loaderAnimate:boolean = true;
  storageRef = firebase.storage().ref();
  pdfObj = null;
  reciept = null;
  constructor(public navCtrl: NavController, ) { }

  ngOnInit() {
    this.getAllOrders();
  }

  orderTrack(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
        data: data,
        reciept: this.reciept
        //currency: JSON.stringify(currency),
        // refresh: refresh
      }
    }
    this.navCtrl.navigateForward(['track-orders', id], navigationExtras)
    // console.log('My order id ',id, 'data ', data )
  }
  getAllOrders() {
    this.dbOrder.where('userID', '==', this.uid).onSnapshot((res) => {
      this.myOrder = [];
      setTimeout(() => {
        this.loaderAnimate = false;
      }, 2000);
      res.forEach((doc) => {
        this.myOrder.push({ info: doc.data(), id: doc.id });
      })
    })
  }
  /*   removeOrder() {
     this.myOrder.forEach((i) => {
       // this.getOrder(i.id);
       this.dbHistory.doc(i.id).set({ date: new Date().getTime(), reciept: this.reciept }).then(() => {
         this.dbOrder.doc(i.id).delete();
       })
     })
   }  */
  
  getOrder(id) {
 
  }

  goBack(){
    this.navCtrl.pop()
  }

  toggleOne() {
    var circleOne = document.getElementById("one").style.background = "maroon";
    var circleOne = document.getElementById("one").style.color = "whitesmoke";
    var lineOne = document.getElementById("line1").style.border = "0.5px solid grey";
    var circleTwo = document.getElementById("two").style.border = "1px solid grey";
    var lineTwo = document.getElementById("line2").style.border = "0.5px solid grey";
    var circleThree = document.getElementById("three").style.border = "1px solid grey";
    var lineThree = document.getElementById("line3").style.border = "0.5px solid grey";
    var circleFour = document.getElementById("four").style.border = "1px solid grey";
  }
  toggleTwo() {
    var circleOne = document.getElementById("one").style.background = "maroon";
    var circleOne = document.getElementById("one").style.color = "whitesmoke";
    var lineOne = document.getElementById("line1").style.border = "0.5px solid maroon";
    var circleTwo = document.getElementById("two").style.background = " maroon";
    var circleOne = document.getElementById("two").style.color = "whitesmoke";
    var lineTwo = document.getElementById("line2").style.border = "0.5px solid grey";
    var circleThree = document.getElementById("three").style.border = "1px solid grey";
    var lineThree = document.getElementById("line3").style.border = "0.5px solid grey";
    var circleFour = document.getElementById("four").style.border = "1px solid grey";
  }
  toggleThree() {
    var circleOne = document.getElementById("one").style.background = "maroon";
    var circleOne = document.getElementById("one").style.color = "whitesmoke";
    var lineOne = document.getElementById("line1").style.border = "0.5px solid maroon";
    var circleTwo = document.getElementById("two").style.background = "maroon";
    var circleOne = document.getElementById("two").style.color = "whitesmoke";
    var lineTwo = document.getElementById("line2").style.border = "0.5px solid maroon";
    var circleThree = document.getElementById("three").style.background = "maroon";
    var circleOne = document.getElementById("three").style.color = "whitesmoke";
    var lineThree = document.getElementById("line3").style.border = "0.5px solid grey";
    var circleFour = document.getElementById("four").style.border = "1px solid grey";
  }
  toggleFour() {

    var circleOne = document.getElementById("one").style.background = "maroon";
    var circleOne = document.getElementById("one").style.color = "whitesmoke";
    var lineOne = document.getElementById("line1").style.border = "0.5px solid maroon";
    var circleTwo = document.getElementById("two").style.background = "maroon";
    var circleOne = document.getElementById("two").style.color = "whitesmoke";
    var lineTwo = document.getElementById("line2").style.border = "0.5px solid maroon";
    var circleThree = document.getElementById("three").style.background = "maroon";
    var circleOne = document.getElementById("three").style.color = "whitesmoke";
    var lineThree = document.getElementById("line3").style.border = "0.5px solid maroon";
    var circleFour = document.getElementById("four").style.background = " maroon";
    var circleOne = document.getElementById("four").style.color = "whitesmoke";
  }


}
