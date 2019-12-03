import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NavController, Platform } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.page.html',
  styleUrls: ['./pending-orders.page.scss'],
})
export class PendingOrdersPage implements OnInit {
  dbOrder = firebase.firestore().collection('Order');
  dbHistory = firebase.firestore().collection('History');
  dbUserProfile = firebase.firestore().collection('userProfile');
  uid = firebase.auth().currentUser.uid;
  myOrder = [];
  letterObj = {
    to: '',
    from: '',
    text: ''
  }
  storageRef = firebase.storage().ref();
  pdfObj = null;
  reciept = null;
  constructor(public navCtrl: NavController, private plt: Platform, private file: File, private fileOpener: FileOpener) { }

  ngOnInit() {
    this.getAllOrders();
    // this.createPdf();
    this.userProfile();
  }
  userProfile() {
    this.dbUserProfile.doc(this.uid).onSnapshot((res) => {
      this.letterObj.from = res.data().name + ' ' + res.data().surname;
    })
    this.letterObj.to = 'Broken stool';
  }

  createPdf() {
    var docDefinition = {
      content: [
        { text: 'Reciept', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'From', style: 'subheader' },
        { text: this.letterObj.from },

        { text: 'To', style: 'subheader' },
        this.letterObj.to,

        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },

        {
          columns: [
            {
              ul: [
                'Items',
                'dasdwddwdws',
              ]
            },
            {
              ul: [
                'Quantity',
                '1',
              ]
            },
            {
              ul: [
                'Unit price',
                'R4.50',
              ]
            }
          ]
          // table:[]
          /*  ul: [
             'Bacon',
             'Rips',
             'BBQ',
           ] */
        }
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
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.downloadPdf();
  }
  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
        firebase.storage().ref('Reciepts/').child(Math.floor(1000) + '.pdf').put(blob).then((results) => {
          console.log('results url: ', results);
          // results.downloadURL
          firebase.storage().ref('Reciepts/').child(results.metadata.name).getDownloadURL().then((url) => {
            // console.log(results);
            // this.pdfDoc = url;
            //this.quotes.pdfLink = url;
            this.reciept = url;
            // console.log('download url ',url);

            // this.saveData();
            //console.log('pdf link from storage............:', this.pdfDoc);
          })
        })
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }
  orderTrack(id, data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
        data: data,
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
      res.forEach((doc) => {
        this.myOrder.push({ info: doc.data(), id: doc.id });
      })
    })
  }
  removeOrder() {
    this.myOrder.forEach((i) => {
      // this.getOrder(i.id);
      this.dbHistory.doc(i.id).set({ date: new Date().getTime(), reciept: this.reciept }).then(() => {
        this.dbOrder.doc(i.id).delete();
      })
    })
  }
  getOrder(id) {
    this.downloadPdf();
    this.dbOrder.doc(id).onSnapshot((res) => {
      if (res.data().status === 'ready') {
        //console.log('Collect');
        this.removeOrder();
        this.dbHistory.doc(id).set({ date: new Date().getTime(), reciept: this.reciept }).then(() => {
          this.dbOrder.doc(id).delete();
        })
      } else {
        console.log('Wait until it is');
      }
    })
  }

}
