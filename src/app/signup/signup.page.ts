import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email;
  password;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  createAccount() {
    this.authService.registerUser(this.email, this.password);
  }
}
