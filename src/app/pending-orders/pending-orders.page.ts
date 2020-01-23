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
  myArr=[];
  productOrder=[];
  delCost: number=0;
  delType: string='';
  status: string='';
  constructor(public navCtrl: NavController, ) { }

  ngOnInit() {
    this.getAllOrders();
    this.getOrder();
    this.getProdInfo();
  }

  orderTrack(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
        data: data,
        reciept: this.reciept
      }
    }
    this.navCtrl.navigateForward(['track-orders', id], navigationExtras)
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.myOrder.length; i++) {
      this.myOrder[i].info.product.forEach((j) => {
        this.status = j.status;
        total += (j.cost * j.quantity) + this.delCost;
      });
    }
    return total;
  }
  getProdInfo() {
    for (let i = 0; i < this.myOrder.length; i++) {
      if (this.myOrder[i].info.status === 'received') {
        this.toggleOne();
      } else if (this.myOrder[i].info.status === 'processed') {
        this.toggleTwo();
      } else if (this.myOrder[i].info.status === 'ready') {
        this.toggleThree()
      } else if (this.myOrder[i].info.status === 'collected') {
        setTimeout(() => {
         // this.downloadPdf();
          console.log('Deleting PDF');
        }, 1000);
        this.toggleFour()
      }
    }
  }
  getOrder() {
    this.myOrder.forEach((item)=>{
      console.log('Item ', item);
      this.dbOrder.doc(item.id).onSnapshot((res) => {
     
      // this.productOrder = [];
      // this.delCost = res.data().deliveryCost;
      // this.delType = res.data().deliveryType;
      // this.status = res.data().status;
      // res.data().product.forEach(item => {
      //   this.productOrder.push(item);
      // });
    })
    })
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
