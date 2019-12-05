import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ToastController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  editprofile = false;
  dbProfile = firebase.firestore().collection("userProfile");
  dbCart = firebase.firestore().collection('Cart');
  dbWish = firebase.firestore().collection('Wishlist');
  storage = firebase.storage().ref();
  uid = firebase.auth().currentUser.uid;
  profilePic;
  name; 
  surname;
  email;
  myCart:number;
  myWish:number;
  constructor(private router: Router, public toastCtrl: ToastController, public loadingController: LoadingController,private camera: Camera,
    private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() { 
    this.dbProfile.doc(this.uid).onSnapshot((doc) => {
    //console.log("My profile ", doc.data());
    this.profilePic=doc.data().profilePic;
    this.name=doc.data().name;
    this.surname=doc.data().surname;
    this.email=doc.data().email;
    //this.profile.push(doc.data());
  })
    //this.presentLoading();
    this.dbCart.where('customerUID', '==',this.uid).onSnapshot((res)=>{
      this.myCart = res.size;
    })
    this.dbWish.where('customerUID', '==',this.uid).onSnapshot((res1)=>{
      this.myWish = res1.size;
    })
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading..',
      duration:3000
    });
    await loading.present();
  }
  basket() {
    this.router.navigateByUrl("basket")
  }

  wishlist() {
    this.router.navigateByUrl("wishlist")
  }

  pendingOrders() {
    this.router.navigateByUrl("pending-orders")
  }

  orderhistory() {
    this.router.navigateByUrl("order-history")
  }

  showEdit(){
    this.editprofile=!this.editprofile
  }

  goBack(){
    this.navCtrl.pop()
  }
  
  updateProfile() {
    this.dbProfile.doc(this.uid).update({name: this.name, surname: this.surname, email: this.email}).then(()=>{
      this.editprofile=!this.editprofile;
      this.toastController();
    })
    //console.log('My profile ', p);
  }
  async toastController() {
    let toast = await this.toastCtrl.create({message:'Profile update', duration: 2000})
    return toast.present()
  }
  /* createAccount() {
    // let email = this.account.get('name')
    if (this.profilePic == "") {
      this.alert('Profile picture required', 'Please upload your image')
    } else {
      this.name = this.account.get('name').value;
      this.surname = this.account.get('surname').value;
      this.email = this.account.get('email').value;

      this.dbProfile.doc(this.uid).set({
        name: this.name, surname: this.surname, cellPhone: firebase.auth().currentUser.phoneNumber,
        email: this.email, profilePic: this.profilePic
      }).then((res) => {
        this.router.navigateByUrl('home');
      }).catch((err) => {
        this.alert('Profile not created', 'Please try again..');
      })
    } */
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
        //  this.uploadprogress = progress;
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
}
