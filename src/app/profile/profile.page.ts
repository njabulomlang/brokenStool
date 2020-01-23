import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController, LoadingController, ActionSheetController, NavController } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { AuthService } from '../services/auth.service';
import { ModalController } from '@ionic/angular';
import { PendingOrdersPage } from '../../app/pending-orders/pending-orders.page';
import { OrderHistoryPage} from '../../app//order-history/order-history.page'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loaderMessages = 'Loading...';
  loaderAnimate: boolean = true;
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
  address;
  myCart:number;
  myWish:number;
  myWishlist=[];
  viewReviews = false;
  constructor(public modalController: ModalController, private authService: AuthService, private router: Router, public toastCtrl: ToastController, public loadingController: LoadingController,private camera: Camera,
    private actionSheetCtrl: ActionSheetController, public navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaderAnimate = false
    }, 2000);
    this.getUserDetails(this.uid);
    //this.presentLoading();
    this.getCartSize();
    this.getWishSize();
    this.getWishlist();

  }
  delete(id) {
    this.dbWish.doc(id).delete()
  }
  addtoBusket(view_id, data, id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: data.brand,
        category: data.category
      }
    };
    this.dbWish.doc(id).delete().then(() => {
      this.navCtrl.navigateForward(['view', view_id], navigationExtras)
    })
  }


  getWishlist() {
    this.dbWish.where('customerUID', '==', this.uid).onSnapshot((res) => {
      this.myWishlist = [];
      res.forEach((doc) => {
        this.myWishlist.push({ info: doc.data(), id: doc.id });
      })
    })
  }
  getWishSize() {
    this.dbWish.where('customerUID', '==', this.uid).onSnapshot((res1) => {
      this.myWish = res1.size;
    })
  }
  getCartSize() {
    this.dbCart.where('customerUID', '==', this.uid).onSnapshot((res) => {
      this.myCart = res.size;
    })
  }
  getUserDetails(uid) {
    this.dbProfile.doc(uid).onSnapshot((doc) => {
      if (doc.exists) {
        this.profilePic = doc.data().profilePic;
        this.name = doc.data().name;
        this.surname = doc.data().surname;
        this.email = doc.data().email;
        this.address = doc.data().address;
      } else {
        this.navCtrl.navigateForward('create-account')
      }
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PendingOrdersPage
    });
    return await modal.present();
  }

  async presentPending() {
    const modal = await this.modalController.create({
      component: OrderHistoryPage
    });
    return await modal.present();
  }

  reviewed() {
     this.viewReviews = !this.viewReviews
   }
  
  check(val) {
    if (val == 'close') {
      document.getElementById('image').style.display = 'none';
    } else {
      document.getElementById('image').style.display = 'flex';
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading..',
      duration: 3000
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

  showEdit() {
    this.editprofile = !this.editprofile
  }

  goBack() {
    this.navCtrl.pop()
  }

  logout() {
    this.authService.logoutUser()
  }

  updateProfile() {
    this.dbProfile.doc(this.uid).update({ name: this.name, surname: this.surname, email: this.email, address: this.address }).then(() => {
      this.editprofile = !this.editprofile;
      this.toastController();
    })
    //console.log('My profile ', p);
  }
  async toastController() {
    let toast = await this.toastCtrl.create({ message: 'Profile update', duration: 2000 })
    return toast.present()
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
