import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements  CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate() : Promise<boolean> {
    return this._authService.checkingAuthStateBoolean().then( (bln : boolean) => {
      console.log(bln);
      
      if(bln === true) {
        this._router.navigate(['/home'])
        return false
      } else {
        return true
      }
    
    })
  }
}
