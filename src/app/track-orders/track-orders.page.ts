import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file/ngx';
// import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
// import { read } from 'fs';
@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.page.html',
  styleUrls: ['./track-orders.page.scss'],
})
export class TrackOrdersPage implements OnInit {
  doc_id: string;
  dbOrder = firebase.firestore().collection('Order');
  dbHistory = firebase.firestore().collection('orderHistory');
  dbUserProfile = firebase.firestore().collection('userProfile');
  productOrder = [];
  myArr = [];
  name;
  cellno;
  pdfObj = null;
  reciept = null;
  letterObj = {
    to: '',
    from: '',
    text: ''
  }


  delCost: number = 0;
  uid: string = firebase.auth().currentUser.uid;
  //dbProfile = firebase.firestore().collection('userProfile');
  constructor(public NavCtrl: NavController, public route: ActivatedRoute, public router: Router, private plt: Platform, private file: File, private fileOpener: FileOpener) {
    this.route.queryParams.subscribe(params => {
      this.doc_id = params["id"];
      // this.col = params["col"];
    });
  }

  ngOnInit() {
    this.getOrder();
    this.userProfile();
    //console.log(this.elementRef.nativeElement.children[1].children[0].children[1].children[3].children[0].children);
  }
  orderReady() {
    this.dbOrder.doc(this.doc_id).onSnapshot((res) => {
      if (res.data().status === 'ready') {
        //console.log('Collect');
        this.dbHistory.doc(this.doc_id).set({ date: new Date().getTime(), reciept: null }).then(() => {
          this.dbOrder.doc(this.doc_id).delete();
        })
      } else {
        console.log('Wait until it is');
      }
    })
  }
  userProfile() {
    this.dbUserProfile.doc(this.uid).onSnapshot((res) => {
      this.letterObj.to = res.data().name + ' ' + res.data().surname;
    })
    this.letterObj.from = 'Broken stool';
  }
  createPdf() {
    let name = [];
    let quantity = [];
    let cost = [];
    let items = this.myArr.map((item) => {
      //console.log('Extras in table...', item);
      if (this.myArr.length >= 0) {

        return [item.product_name, item.quantity, 'R' + item.cost + '.00'];
      } else {
        return ['*********', 0, 'R0.00']
      }
    });
    this.myArr.forEach((item) => {
      name.push(item.product_name);
      cost.push(item.cost);
      quantity.push(item.quantity)
    })
    var docDefinition = {
      content: [




        { text: 'Your Receipt', style: 'header', color: "gray", bold: true, alignment: "left", fontFamily: 'Roboto', },
        { text: 'Dankie Jesu', style: 'header', alignment: 'right', color: 'gray', fontSize: 20,},
        // { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'From', style: 'subheader', color: "gray", bold: true, alignment: "left", fontFamily: 'Roboto', },
        { text: this.letterObj.from, color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 11, },

        { text: 'To', style: 'subheader', color: "gray", italic: true},
        { text: this.letterObj.to, color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 11, },

        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },
        { text: 'Reference number: ', style: 'subheader', color: "gray", italic: true },
        { text: this.doc_id , color: "gray", italic: true},


        { text: 'Date Of Purchase: ', style: 'subheader', color: "gray", bold: true, alignment: "left", fontFamily: 'Roboto', fontSize: 13, },
        
        
        {

          layout: 'lightHorizontalLines',
          table: {

            widths: ['auto', 'auto', '20%'],

            body: [
       

              [name, quantity, cost,],
              [ { text: 'TOTAL', bold: true, color: 'gray'},'R', cost, ]
            ]
          }

        },


        { text: 'Order Type: Delivery', style: 'story', margin: [5, 2],color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 11, },

        { text: 'Order Address: ', style: 'story', margin: [5, 2], color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 11, },
        { text: ' 123 Meadowlands, Zone 9 ', style: 'story',margin: [5, 2],  color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 8, },
      
      
        { text: 'Order Status: Delivered' , style: 'story',margin: [5, 2],  color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 14, },
      ],


      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
      
        },



      },

      pageSize: 'A4',
      pageOrientation: 'portrait'

    };
    this.pdfObj = pdfMake.createPdf(docDefinition);

  }
  downloadPdf() {
    this.createPdf();
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
        firebase.storage().ref('Reciepts/').child(new Date().getTime() + '.pdf').put(blob).then((results) => {
          //console.log('results url: ', results);
          // results.downloadURL
          firebase.storage().ref('Reciepts/').child(results.metadata.name).getDownloadURL().then((url) => {
            // console.log(results);
            // this.pdfDoc = url;
            //this.quotes.pdfLink = url;
            this.reciept = url;
            // this.getReciept(url);
            console.log('download url ', url);
            this.saveData();
            //console.log('pdf link from storage............:', this.pdfDoc);
          })
        })
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          // this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }
  saveData() {
    this.dbOrder.doc(this.doc_id).onSnapshot((res) => {
      if (res.data().status === 'collected') {
        //console.log('Collect');
        this.dbHistory.doc(this.doc_id).set({
          date: new Date().getTime(), reciept: this.reciept, orders: this.productOrder, uid: this.uid,
          refNo: this.doc_id
        }).then(() => {
          this.dbOrder.doc(this.doc_id).delete();
        })
      } else {
        console.log('Wait until it is');
      }
    })
  }
  getOrder() {
    this.dbOrder.doc(this.doc_id).onSnapshot((res) => {
      res.data().product.forEach((item) => {
        this.myArr.push(item)
      })
      //this.userDetails(res.data().userID);
      // console.log('My order', res.data());
      if (res.data().status === 'recieved') {
        this.toggleOne();
      } else if (res.data().status === 'processed') {
        this.toggleTwo();
      } else if (res.data().status === 'ready') {
        this.toggleThree()
      } else if (res.data().status === 'collected') {
        setTimeout(() => {
          this.downloadPdf();
          console.log('Deleting PDF');
        }, 1000);
        this.toggleFour()
      }
      this.productOrder = [];
      this.delCost = res.data().deliveryCost;
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
      total += (this.productOrder[i].cost * this.productOrder[i].quantity) + this.delCost;
      // })
      //
    }
    //console.log('My tot ', total);

    return total;
  }
  done() {
    this.router.navigateByUrl("pending-orders")
  }
  toggleOne() {
    var circleOne = document.getElementById("one").style.border = "1px solid red";
    var lineOne = document.getElementById("line1").style.border = "0.5px solid grey";
    var circleTwo = document.getElementById("two").style.border = "1px solid grey";
    var lineTwo = document.getElementById("line2").style.border = "0.5px solid grey";
    var circleThree = document.getElementById("three").style.border = "1px solid grey";
    var lineThree = document.getElementById("line3").style.border = "0.5px solid grey";
    var circleFour = document.getElementById("four").style.border = "1px solid grey";
  }
  toggleTwo() {
    var circleOne = document.getElementById("one").style.border = "1px solid red";
    var lineOne = document.getElementById("line1").style.border = "0.5px solid red";
    var circleTwo = document.getElementById("two").style.border = "1px solid red";
    var lineTwo = document.getElementById("line2").style.border = "0.5px solid grey";
    var circleThree = document.getElementById("three").style.border = "1px solid grey";
    var lineThree = document.getElementById("line3").style.border = "0.5px solid grey";
    var circleFour = document.getElementById("four").style.border = "1px solid grey";
  }
  toggleThree() {
    var circleOne = document.getElementById("one").style.border = "1px solid red";
    var lineOne = document.getElementById("line1").style.border = "0.5px solid red";
    var circleTwo = document.getElementById("two").style.border = "1px solid red";
    var lineTwo = document.getElementById("line2").style.border = "0.5px solid red";
    var circleThree = document.getElementById("three").style.border = "1px solid red";
    var lineThree = document.getElementById("line3").style.border = "0.5px solid grey";
    var circleFour = document.getElementById("four").style.border = "1px solid grey";
  }
  toggleFour() {

    var circleOne = document.getElementById("one").style.border = "1px solid red";
    var lineOne = document.getElementById("line1").style.border = "0.5px solid red";
    var circleTwo = document.getElementById("two").style.border = "1px solid red";
    var lineTwo = document.getElementById("line2").style.border = "0.5px solid red";
    var circleThree = document.getElementById("three").style.border = "1px solid red";
    var lineThree = document.getElementById("line3").style.border = "0.5px solid red";
    var circleFour = document.getElementById("four").style.border = "1px solid red";
  }

  goBack() {
    this.NavCtrl.pop()
  }
}
