import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AlertController, NavController, Platform, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signUpForm
  // emailPattern : string = "[a-zA-Z0-9-_.+#$!=%^&*/?]+[@][a-zA-Z0-9-]+[.][a-zA-Z0-9]+"
  numberPattern: string = "^(?=.[0-9]).{10,10}$"
  constructor(private router: Router, private alertController: AlertController, private authService: AuthService,
    public toastCtrl: ToastController, public plt : Platform, public navCtrl : NavController,
    private formBuilder: FormBuilder
    ) {
    this.signUpForm = this.formBuilder.group({
      address: ['', Validators.compose([Validators.required])],
      cellPhone: ['', Validators.compose([
        Validators.required, Validators.pattern(this.numberPattern)
      ])],
      name: ['', Validators.compose([Validators.required])],
      surname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    })
  }
  signUp() {
    let user: object = this.signUpForm.value
    let num: string = '+27'
    let fullNumber = user['cellPhone'].split('')
    fullNumber[0] = num
    user['cellPhone'] = fullNumber.join('')
    console.log(user);
    console.log(this.signUpForm);
    console.log(user);
    if(user['password'] === user['confirmPassword']) {
      delete user['confirmPassword']
      console.log(user);
      this.authService.register(user).then(data => {
        if(data.operationType === "signIn"){
          // this.router.navigate(['home'])
        } else {
          this.showAlert(data)
        }
      })
    } else {
      this.showAlert(`Passwords do not match!`) 
    }
  }
  login() {
    this.router.navigate(['login'])
  }
  async showAlert(result) {
    const alert = await this.alertController.create({
      header: "Alert",
      message: result,
      buttons: ['OK']
    })
    await alert.present()
  }
  ionViewWillLeave() {
    this.signUpForm.patchValue({
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      cellPhone: '',
      address: ''
    });
    
  }
  ionViewWillEnter() {

  }
  ngOnDestroy() {

  }
  ngOnInit() {
  }

}
