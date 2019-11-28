import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.page.html',
  styleUrls: ['./track-orders.page.scss'],
})
export class TrackOrdersPage implements OnInit {
  doc_id: string;
  dbOrder = firebase.firestore().collection('Order');
  productOrder = [];
  name;
  cellno;
  //dbProfile = firebase.firestore().collection('userProfile');
  constructor(public route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params => {
      this.doc_id = params["id"];
      // this.col = params["col"];
    });
  }

  ngOnInit() {
    this.getOrder();
    //console.log(this.elementRef.nativeElement.children[1].children[0].children[1].children[3].children[0].children);
  }
  getOrder() {
    this.dbOrder.doc(this.doc_id).onSnapshot((res) => {
      //this.userDetails(res.data().userID);
      // console.log('My order', res.data());
      if (res.data().status === 'recieved') {
        this.toggleOne();
      } else if (res.data().status === 'processed') {
        this.toggleTwo();
      } else if (res.data().status === 'ready') {
        this.toggleThree()
      } else if (res.data().status === 'collected') {
        this.toggleFour()
      }
      this.productOrder = []
      res.data().product.forEach(item => {
        this.productOrder.push(item);
      });
      // console.log('My products ', this.productOrder);
    })
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.productOrder.length; i++) {
      //let product = this.productOrder[i].data.product;
      // console.log(product);
      /// product.forEach((item) => {
      total += this.productOrder[i].cost * this.productOrder[i].quantity;
      // })
      //
    }
    //console.log('My tot ', total);

    return total;
  }
  /*   userDetails(uid) {
      this.dbProfile.doc(uid).onSnapshot((res)=>{
        this.name = res.data().name + ' ' + res.data().surname;
        this.cellno = res.data().cellPhone; 
        console.log('My name ', this.name, 'Cell no ',this.cellno);
      }) 
    } */

  done() {
    this.router.navigateByUrl("pending-orders")
  }



  toggleOne() {
    var circleOne = document.getElementById("one").style.border = "2px solid red";
    var lineOne = document.getElementById("line1").style.border = "2px solid grey";
    var circleTwo = document.getElementById("two").style.border = "2px solid grey";
    var lineTwo = document.getElementById("line2").style.border = "2px solid grey";
    var circleThree = document.getElementById("three").style.border = "2px solid grey";
    var lineThree = document.getElementById("line3").style.border = "2px solid grey";
    var circleFour = document.getElementById("four").style.border = "2px solid grey";
  }
  toggleTwo() {
    var circleOne = document.getElementById("one").style.border = "2px solid red";
    var lineOne = document.getElementById("line1").style.border = "2px solid red";
    var circleTwo = document.getElementById("two").style.border = "2px solid red";
    var lineTwo = document.getElementById("line2").style.border = "2px solid grey";
    var circleThree = document.getElementById("three").style.border = "2px solid grey";
    var lineThree = document.getElementById("line3").style.border = "2px solid grey";
    var circleFour = document.getElementById("four").style.border = "2px solid grey";
  }
  toggleThree() {
    var circleOne = document.getElementById("one").style.border = "2px solid red";
    var lineOne = document.getElementById("line1").style.border = "2px solid red";
    var circleTwo = document.getElementById("two").style.border = "2px solid red";
    var lineTwo = document.getElementById("line2").style.border = "2px solid red";
    var circleThree = document.getElementById("three").style.border = "2px solid red";
    var lineThree = document.getElementById("line3").style.border = "2px solid grey";
    var circleFour = document.getElementById("four").style.border = "2px solid grey";
  }
  toggleFour() {

    var circleOne = document.getElementById("one").style.border = "2px solid red";
    var lineOne = document.getElementById("line1").style.border = "2px solid red";
    var circleTwo = document.getElementById("two").style.border = "2px solid red";
    var lineTwo = document.getElementById("line2").style.border = "2px solid red";
    var circleThree = document.getElementById("three").style.border = "2px solid red";
    var lineThree = document.getElementById("line3").style.border = "2px solid red";
    var circleFour = document.getElementById("four").style.border = "2px solid red";
  }
}
