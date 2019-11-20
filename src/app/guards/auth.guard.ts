import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  dbUser = firebase.firestore().collection("Users");
  constructor(private _authService: AuthService,
    private _router: Router) {}
    canActivate():boolean {
      if(this._authService.loggedIn()) {
        return true
      } else {
        this._router.navigateByUrl('login')
        return false
      }
    }
}
