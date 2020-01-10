import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { mergeAnalyzedFiles } from '@angular/compiler';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  dbProfile = firebase.firestore().collection("userProfile");
  storage = firebase.storage().ref();
  uid = firebase.auth().currentUser.uid;
  emailPattern: string = "[a-zA-Z0-9-_.+#$!=%^&*/?]+[@][a-zA-Z0-9-]+[.][a-zA-Z0-9]+[.][a-zA-Z0-9]"
  name: string;
  surname: string;
  email: string;
  address: string;
  profilePic: string = "";
  uploadprogress: number;
  isuploading: boolean;
  account: FormGroup
  constructor(public router: Router, public alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController,
    public camera: Camera, public formBuilder: FormBuilder) {
    this.account = formBuilder.group({
      name: [this.name, Validators.compose([Validators.required, Validators.maxLength(250)])],
      surname: [this.surname, Validators.compose([Validators.required, Validators.maxLength(250)])],
      address: [this.surname, Validators.compose([Validators.required, Validators.maxLength(250)])],
      email: [this.email, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
    });
  }

  ngOnInit() {

  }

  check(val) {
    if (val=='close') {
      document.getElementById('image').style.display = 'none';
    } else {
      document.getElementById('image').style.display = 'flex';
    }
  }


  createAccount() {
    // let email = this.account.get('name')
    if (this.profilePic == "") {
      this.alert('Profile picture required', 'Please upload your image')
    } else {
      this.name = this.account.get('name').value;
      this.surname = this.account.get('surname').value;
      this.email = this.account.get('email').value;
      this.address = this.account.get('address').value;
      this.dbProfile.doc(this.uid).set({
        name: this.name, surname: this.surname, cellPhone: firebase.auth().currentUser.phoneNumber,
        email: this.email, profilePic: this.profilePic,address: this.address
      }).then((res) => {
        this.router.navigateByUrl('home');
      }).catch((err) => {
        this.alert('Profile not created', 'Please try again..');
      })
    }

  }
  async selectImage() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Select image",
      buttons: [{
        icon: 'images',
        text: 'Gallery',

        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY)
        }
      },
      {
        icon: 'camera',
        text: 'Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA)
        }
      },
      {
        icon: 'close',
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }
  async takePicture(sourcetype: PictureSourceType) {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      quality: 90,
      targetHeight: 600,
      targetWidth: 600,
      sourceType: sourcetype,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    await this.camera.getPicture(options).then(res => {
      let base64Image = 'data:image/jpeg;base64,' + res;
      //this.profileImage = base64Image;
      let file = 'HomeOwner-Profile/' + this.uid + '.jpg';
      const UserImage = this.storage.child(file);
      const upload = UserImage.putString(base64Image, 'data_url');
      upload.on('state_changed', snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.uploadprogress = progress;
        console.log('Uploading image..', progress);
        //this.loaderAnimate = true;
        //  this.loaderMessages = 'Uploading Image...';
        // if (progress == 100) {
        //   //this.isuploading = false;
        // }
      }, err => {
      }, () => {
        upload.snapshot.ref.getDownloadURL().then(downUrl => {
          this.profilePic = downUrl;
          // console.log('Image downUrl.............', this.HomeOwnerProfile.image);
          /*     setTimeout(() => {
               this.loaderAnimate = false;
             }, 1000); */
          //  this.isuploaded = true;
        })
      })
    }, err => {
      console.log("Something went wrong: ", err);
    })
    // this.imageSelected = true;
    // })
  }
  async alert(header, message) {
    const al = await this.alertCtrl.create({
      header: header,
      message: message
    })
    al.present();
  }
}
