import { Component, OnInit, Renderer2 } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ToastController, PopoverController, NavController, AlertController, Platform } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  dbProduct = firebase.firestore().collection('Products');
  dbCart = firebase.firestore().collection('Cart');
  dbOrder = firebase.firestore().collection('Order');
  // customerUID = firebase.auth().currentUser.uid;
  docID: string;
  col: string;
  doc_data: [];
  doc_id: any;
  cartDoc: string;
  quantity: number = 1;
  myProduct = [];
  data = [];
  unitProduct = [];
  my_size: string = '';
  sizeIndex = null;
  colorIndex = null;
  color: string = '';
  myRate: number = 0;
  dbRate = firebase.firestore().collection('productRate');
  dbSales = firebase.firestore().collection('Specials');
  mySale = [];
  category: string = '';
  starRating = document.getElementsByClassName('ionic4-star-rating')
  boolCheck: boolean = false;
  viewCart = false;
  viewBackdrop = false;
  viewSideMenu = false;
  prodCart = [];
  delCost: number;
  delType: string;
  buttonActive: boolean = true;
  cordova: boolean
  alertView: boolean = false;
  loaderMessages = 'Loading...';
  loaderAnimate: boolean = true;
  colorArr=[];
  myArr = [];
  // colorIndex = null;
  constructor(public router: Router, public route: ActivatedRoute, public toastCtrl: ToastController, public popoverController: PopoverController, public navCtrl: NavController,
    public render: Renderer2, public alertCtrl: AlertController, public plt: Platform, private localSt: LocalStorageService) {
    this.doc_id = this.route.snapshot.paramMap.get('view_id');
    this.route.queryParams.subscribe(params => {
      this.doc_data = params["data"];
      this.col = params["col"];
      this.category = params["category"];
    })
  }

  ngOnInit() {
    setTimeout(() => {
      this.loaderAnimate = false;
    }, 2000);
    if (this.plt.is('cordova')) {
      this.cordova = true
    } else {
      this.cordova = false;
    }
    this.checkUser();
    if (this.col === 'Specials') {
      this.getSpecial();
    } else {
      this.getProduct();
    }
    this.dbRate.where('product', '==', this.doc_id).onSnapshot((res) => {
      if (res.size === 0) {
        this.myRate = 0
      } else {
        res.forEach((doc) => {
          this.myRate = doc.data().rating / res.size;
        })
      }
    })
  }

  getSideMenu() {
    this.viewSideMenu = !this.viewSideMenu
    this.viewBackdrop = !this.viewBackdrop
  }
  checkUser() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.getCart();
        } else {
          this.alertView = this.localSt.retrieve('alertShowed');
          // console.log('My data ',this.alertView);
          if (this.localSt.retrieve('alertShowed') !== true) {
            this.presentAlertConfirm1();
          }
        }
      })
    }, 0);
  }
  categories(data) {
    // console.log(data);
    this.router.navigate(['categories', data])
  }
  goList(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        col: 'Specials',
        //currency: JSON.stringify(currency),
        // refresh: refresh
      }
    };
    //this.router.navigate(['list', data])
    this.navCtrl.navigateForward(['list', data], navigationExtras);
  }

  home() {
    this.navCtrl.navigateRoot('home');
  }
  back() {
    this.navCtrl.pop();
  }
  async presentAlertConfirm1() {
    const alert = await this.alertCtrl.create({
      header: 'Message',
      message: 'Please Sign-in',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.alertView = true;
            this.localSt.store('alertShowed', this.alertView);
          }
        }, {
          text: 'Sign In',
          handler: () => {
            this.alertView = true;
            this.localSt.store('alertShowed', this.alertView);
            this.navCtrl.navigateForward('login');
          }
        }
      ]
    });

    await alert.present();
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.prodCart.length; i++) {
      let product = this.prodCart[i].data.product;
      // console.log(product);
      product.forEach((item) => {
        total += (item.cost * item.quantity);
      })
      //
    }
    //console.log('My tot ', total);

    return total;
  }
  placeOrder(info) {
    let myArr = [];
    let doc = [];
    for (let i = 0; i < info.length; i++) {
      // const element = info[i].data;
      /* myArr = info[i].data.product */
      doc.push(info[i].id)
      //console.log('my info ', );
      info[i].data.product.forEach(item => {
        myArr.push(item);
      });
    }
    if (this.prodCart.length === 0) {
      this.toastController('You cannot place order with empty basket');
    } else {
      let docname = 'BrokenStool' + Math.floor(Math.random() * 10000000);
      this.dbOrder.doc(docname).set({
        product: myArr, timestamp: new Date().getTime(),
        status: 'received', userID: firebase.auth().currentUser.uid,
        totalPrice: this.getTotal(), deliveryCost: this.delCost, deliveryType: this.delType
      }).then(() => {
        doc.forEach((id) => {
          this.dbCart.doc(id).delete();
        })
      })
    }
  }
  getCart() {
    this.dbCart.where('customerUID', '==', firebase.auth().currentUser.uid).onSnapshot((info) => {
      this.prodCart = [];
      // this.totalCost = 0;
      info.forEach((doc) => {
        this.prodCart.push({ data: doc.data(), id: doc.id });
      })
    })
  }
  gotocart() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.viewCart = !this.viewCart
          this.viewBackdrop = !this.viewBackdrop
        } else {
          this.presentAlertConfirm1();
        }
      })
    }, 0);
  }
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Place order now?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Yes, continue',
          handler: () => {
            this.placeOrder(this.prodCart)
          }
        }
      ]
    });
    await alert.present();
  }
  Delivery(tot) {
    let total = 0;
    this.delCost = 100;
    this.delType = "Delivery";
    for (let i = 0; i < this.prodCart.length; i++) {
      let product = this.prodCart[i].data.product;
      product.forEach((item) => {
        total = tot + 100
      })
    }
    return total;
  }
  notDelivery(tot) {
    let total = 0;
    this.delCost = 0;
    this.delType = "Collection";
    for (let i = 0; i < this.prodCart.length; i++) {
      let product = this.prodCart[i].data.product;
      product.forEach((item) => {
        total = tot
      })
    }
    return total;
  }
  onBoolChenged(c, i) {
    console.log('Boolean val ', c, 'index ', i);
  }
  async getProduct() {
    await this.dbProduct.doc(this.col).collection(this.category).doc(this.doc_id).get().then((doc) => {
      this.unitProduct.push({ data: doc.data(), id: doc.id })
    })
  }
  async getSpecial() {
    await this.dbSales.doc(this.doc_id).get().then((res) => {
      this.mySale.push({ data: res.data(), id: res.id });
    })
  }
  async presentPopover(ev: any) {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(async (res) => {
        if (res) {
          const popover = await this.popoverController.create({
            component: PopoverComponent,
            event: ev,
            translucent: true,
            componentProps: {
              col: this.col,
              doc: this.doc_id
            }
          });
          return await popover.present();
        } else {
          this.presentAlertConfirm1();
        }
      })
    }, 0);
    /*    const popover = await this.popoverController.create({
         component: PopoverComponent,
         event: ev,
         translucent: true,
         componentProps: {
           col: this.col,
           doc: this.doc_id
         }
       });
       return await popover.present(); */
  }
  sizeChosen(ev, data, index) {
    // console.log("event ", ev);
    if (ev.detail.checked === true) {
      this.myArr.push(data)
    } else {
      this.myArr.splice(this.myArr.indexOf(data), 1);
    }
    // console.log("my sizes ",this.myArr);
    
    this.sizeIndex = index
    this.my_size = data;
  }

  colorChosen(ev,color, index) {
    if (ev.detail.checked === true) {
      this.colorArr.push(color)
    } else {
      this.colorArr.splice(this.colorArr.indexOf(color), 1);
    }
    //  console.log("my colors ",this.colorArr);
    
    this.color = color;
    this.colorIndex = index
  }
  plus() {
    this.quantity += 1
  }
  minus() {
    if (this.quantity <= 1) {
      this.toastController('Quantity must be positive')
    } else {
      this.quantity -= 1
    }
  }

  pluss(prod, index) {
    let num = index.data.product[0].quantity++
    index.data.product[0].cost = index.data.product[0].cost
    let id = index.id

    let product = [prod]
    this.dbCart.doc(id).update({ product: product }).then(res => {
    })
  }
  removeProd(id) {
    this.dbCart.doc(id).delete().then((res) => {
    })
  }
  minuss(prod, index) {
    if (index.data.product[0].quantity === 1) {
    } else {
      let num = index.data.product[0].quantity--
      index.data.product[0].cost = index.data.product[0].cost
      let id = index.id
      let product = [prod]
      this.dbCart.doc(id).update({ product: product }).then(res => {
      })
    }
  }
  async toastController(message) {
    let toast = await this.toastCtrl.create({ message: message, duration: 2000 });
    return toast.present();
  }
  toBusket() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          this.router.navigateByUrl('basket');
        } else {
          this.presentAlertConfirm1();
        }
      })
    }, 0);
  }
  addToCart(id, details) {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          let descr = "";
          if (this.myArr.length===0) {
            descr = "size"
          } else if (this.colorArr.length===0) {
            descr = "color"
          }
          if (this.myArr.length===0 || this.colorArr.length===0) {
            this.toastController('Missing selection of ' + descr);
          } else {
            this.dbCart.add({
              customerUID: firebase.auth().currentUser.uid, timestamp: new Date().getTime(), product: [{
                product_name: details.name, size: this.myArr,
                quantity: this.quantity, cost: details.price, unitCost: details.price, picture: details.pictureLink,
                color: this.colorArr
              }]
            }).then(() => {
              this.toastController('Added to basket')
            })
          }
        } else {
          this.alertView = this.localSt.retrieve('alertShowed');
          this.presentAlertConfirm1();
        }
      })
    }, 0);
  }
  addSaleToCart(id, details) {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res) => {
        if (res) {
          let descr = "";
          if (this.my_size === "") {
            descr = "size"
          } else if (this.color === "") {
            descr = "color"
          }
          if (this.my_size === "" || this.color === "") {
            this.toastController('Missing selection of ' + descr);
          } else {
            this.dbCart.add({
              customerUID: firebase.auth().currentUser.uid, timestamp: new Date().getTime(), product: [{
                product_name: details.name, size: this.my_size,
                quantity: this.quantity, cost: details.saleprice, picture: details.pictureLink,
                color: this.color
              }]
            }).then(() => {
              this.toastController('Added to basket')
            })
          }
        } else {
          this.alertView = this.localSt.retrieve('alertShowed');
          this.presentAlertConfirm1();
        }
      })
    }, 0);
  }
  goBack() {
    this.navCtrl.pop()
  }
  viewitem() {
    this.router.navigateByUrl("/basket")
  }

  switchView(state) {
    switch (state) {
      case 'd':
        this.buttonActive = true;
        this.Delivery(this.getTotal());
        break;
      case 'c':
        this.buttonActive = false;
        this.notDelivery(this.getTotal());
        break;
    }
  }
}
