import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.page.html',
  styleUrls: ['./receipts.page.scss'],
})
export class ReceiptsPage implements OnInit {
  dbHistory = firebase.firestore().collection('orderHistory');
  myOrder = [];
  doc_id: string;
  constructor(public route: ActivatedRoute, private file: File, private fileOpener: FileOpener, public downloader: Downloader,
    public toastController: ToastController) {
    this.doc_id = this.route.snapshot.paramMap.get('id');
    // this.route.queryParams.subscribe(params => {
    //   this.doc_id = params["id"];
    //   // this.col = params["col"];
    // });
  }

  ngOnInit() {
    this.getOrder();
  }
  getOrder() {
    this.dbHistory.doc(this.doc_id).onSnapshot((res) => {
      this.myOrder.push(res.data())
    })
  }

  downloadPDF(pdf) {
    /*     this.loader.create({
          content: "Downloading...",
          duration: 3000
        }).present(); */
    console.log('PDF link..', pdf);
    let request: DownloadRequest = {
      uri: pdf,
      title: 'Reciept ' + new Date().getTime(),
      description: '',
      mimeType: '',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
        dirType: 'Download',
        subPath: 'Reciepts'
      }
    };
    this.downloader.download(request)
      .then((location: string) => {
        console.log('Located at ',location);
        this.presentToast()
      } )
      .catch((error: any) => console.error(error));
    //  this.pdfObj = pdfMake.createPdf();
    // this.pdfObj.getBuffer((buffer) => {
    
    // });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your file have been saved',
      duration: 3000,
    /*   buttons: [
        {
          side: 'end',
          icon: 'document',
          text: 'Open',
          handler: () => {
            this.file.writeFile(this.file.dataDirectory,pdf+'.pdf', 'application/pdf', { replace: true }).then(fileEntry => {
              this.fileOpener.open(this.file.dataDirectory +  pdf+'.pdf', 'application/pdf');
            })
          }
        }
      ] */
    });
    toast.present();
  }

}
