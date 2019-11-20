import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  goSignUp() {
    this.router.navigateByUrl("/signup")
  }
  login() {
    this.authService.loginUser(this.email, this.password)
  }
}
