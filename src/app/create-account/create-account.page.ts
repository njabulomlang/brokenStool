import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ActionSheetController, Platform } from '@ionic/angular';
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
  emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  name: string 
  surname: string 
  email: string 
  address: string = '';
  profilePic: string = '';
  uploadprogress: number;
  isuploading: boolean;
  account: FormGroup;
  
  constructor(public router: Router, public alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController, public route: ActivatedRoute,
    public camera: Camera, public formBuilder: FormBuilder,public plt : Platform) {
    this.account = formBuilder.group({
      name: [this.name, Validators.compose([Validators.required, Validators.maxLength(250)])],
      surname: [this.surname, Validators.compose([Validators.required, Validators.maxLength(250)])],
      address: [this.address, Validators.compose([Validators.required, Validators.maxLength(250)])],
      email: [this.email, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
    });
    if (firebase.auth().currentUser.email!==null) {
      this.name = firebase.auth().currentUser.displayName.substr(0, firebase.auth().currentUser.displayName.indexOf(' '));
      this.surname = firebase.auth().currentUser.displayName.substr(firebase.auth().currentUser.displayName.indexOf(' ') + 1);
      this.email =  firebase.auth().currentUser.email;
      this.profilePic = firebase.auth().currentUser.photoURL;
    } else {
      this.name = '';
      this.surname = '';
      this.profilePic = ''
    }
  }

  ngOnInit() {
    // console.log('my email',this.email);
    firebase.auth().onAuthStateChanged((res) => {
      if (res) {
        this.dbProfile.doc(res.uid).onSnapshot((res)=>{
          this.address = res.data().address;
          this.name = res.data().name;
          this.surname = res.data().surname;
          this.email = res.data().email;
          this.profilePic = res.data().profilePic;
        })
      }
      })
    }
    // this.name = 
    //this.surname 
    //this.email = firebase.auth().currentUser.email;
    
    /* this.name = firebase.auth().currentUser.displayName.substr(0,firebase.auth().currentUser.displayName.indexOf(' '));
    this.surname = firebase.auth().currentUser.displayName.substr(firebase.auth().currentUser.displayName.indexOf(' ')+1);
    this.email = firebase.auth().currentUser.email;
    this.profilePic = firebase.auth().currentUser.photoURL; */
  check(val) {
    if (val == 'close') {
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
        email: this.email, profilePic: this.profilePic, address: this.address
      }).then((res) => {
        this.router.navigateByUrl('home');
      }).catch((err) => {
        console.log(err);
        this.alert('Profile not created', 'Please try again..');
      })
    }

  }
  async selectImage() {
    if (this.plt.is('cordova')) {
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
    
  }
  featuredPhotoSelected(event: any) {
    const i = event.target.files[0];
    const upload = this.storage.child('HomeOwner-Profile/'+i.name).put(i);
    upload.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('upload is: ', progress, '% done.');
    }, err => {
    }, () => {
      upload.snapshot.ref.getDownloadURL().then(dwnURL => {
        // console.log('File avail at: ', dwnURL);
        this.profilePic = dwnURL;
        this.dbProfile.doc(firebase.auth().currentUser.uid).update({profilePic: this.profilePic})
      });
    });
   // console.log("My pic is ", this.profilePic);
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
