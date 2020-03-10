import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
import { FileDownloadService } from '../services/file-download.service';
import { saveAs } from 'file-saver';

const MIME_TYPES = {
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetxml.sheet'
}

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
  dbHistory = firebase.firestore().collection('orderHistory');
  uid = firebase.auth().currentUser.uid;
  orderHistory = [];
  loaderMessages = 'Loading...';
  loaderAnimate: boolean = true;
  dbProfile = firebase.firestore().collection('userProfile');
  userProfile = {
    name: '',
    surname: '',
    cellno: 0,
    address: ''
  }
  qty: number = 0;
  constructor(public NavCtrl: NavController, private router: Router, private service:FileDownloadService) { }

  ngOnInit() {

    this.getAll();
    this.getProfile();
    //this.getTotal();
  }
  downloadFile(fileName) {
    const EXT = fileName.substr(fileName.lastIndexOf('.') + 1);
    this.service.downloadFile({ 'fileName': fileName})
    .subscribe(data => {
      //save it on the client machine.
      saveAs(new Blob([data], {type: MIME_TYPES[EXT]}), fileName);
    })
  }
  
  getProfile() {
    this.dbProfile.doc(this.uid).onSnapshot((res) => {
      this.userProfile.name = res.data().name;
      this.userProfile.surname = res.data().surname;
      this.userProfile.cellno = res.data().cellPhone;
      this.userProfile.address = res.data().address;
    })
  }
  viewReceipt(id) {

    this.router.navigate(["receipts", id])
  }
  getAll() {
    this.dbHistory.where('uid', '==', this.uid).onSnapshot((res) => {
      this.orderHistory = [];
      setTimeout(() => {
        this.loaderAnimate = false;
      }, 2000);
      res.forEach((doc) => {
        this.orderHistory.push(doc.data());

      })
    })
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.orderHistory.length; i++) {
      let product = this.orderHistory[i].orders;
      product.forEach((item) => {
        total += item.cost * item.quantity;
        this.qty += item.quantity
      })
    }
    return total;
  }
  getQuantity(i) {
    let total = 0;
    let product = this.orderHistory[i].orders;
    product.forEach((item) => {
      total += item.quantity
    })
    return total;
  }
  goBack() {
    this.NavCtrl.pop()
  }
}
