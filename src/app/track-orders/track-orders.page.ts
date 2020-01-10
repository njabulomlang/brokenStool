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
    text: '',
    address:''
  }
  delType: string = '';
  delCost: number = 0;
  status: string = '';
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
      this.letterObj.address = res.data().address;
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
        {
          image:
            'data:image/jpeg;base64,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',
          fit: [100, 100], alignment: "right", marginBottom: 70,
        },
        // { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'From', style: 'subheader', color: "gray", bold: true, alignment: "left", fontFamily: 'Roboto', },
        { text: this.letterObj.from, color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 11, },

        { text: 'To', style: 'subheader', color: "gray", italic: true },
        { text: this.letterObj.to, color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 11, },

        // { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },
        { text: 'Reference number: ', style: 'subheader', color: "gray", italic: true },
        { text: this.doc_id, color: "gray", italic: true },


        { text: 'Date Of Purchase: ', style: 'subheader', color: "gray", bold: true, alignment: "left", fontFamily: 'Roboto', fontSize: 13, },
        { text: '20 December 2019 ', style: 'subheader', color: "gray", bold: true, alignment: "left", fontFamily: 'Roboto', fontSize: 12, },

        {

          layout: 'headerLineOnly',
          table: {

            widths: ['auto', 'auto', '20%'],

            body: [


              [name, quantity, cost,],
              [{ text: this.status, color: 'gray' }, '', { text: '100', color: 'gray', Border: false }],
              [{ text: 'TOTAL', bold: true, color: 'gray', lineHeight: 2, marginTop: 10, },
              { text: 'R', bold: true, color: 'gray', lineHeight: 2, marginTop: 10 },
              { text: this.getTotal(), bold: true, color: 'gray', lineHeight: 2, marginTop: 10 },]
            ]
          }

        },


        { text: 'Order Type: Delivery', style: 'story', margin: [5, 2], color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 11, },

        { text: 'Order Address: ', style: 'story', margin: [5, 2], color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 11, },
        { text: this.letterObj.address, style: 'story', margin: [5, 2], color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 10, },


        { text: 'Order Status: Delivered', style: 'story', margin: [5, 2], color: "gray", italic: true, alignment: "left", fontFamily: 'Roboto', fontSize: 13, },
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
          lineHeight: 1.5,
        },



      },

      pageSize: 'A4',
      pageOrientation: 'portrait'

    };
    this.pdfObj = pdfMake.createPdf(docDefinition);

  }
  downloadPdf() {
   // firebase.firestore().collection('').doc('').
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
          refNo: this.doc_id, delType: this.delType, status: this.status
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
      if (res.data().status === 'received') {
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
      this.delType = res.data().deliveryType;
      this.status = res.data().status;
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

  goBack() {
    this.NavCtrl.pop()
  }
}
