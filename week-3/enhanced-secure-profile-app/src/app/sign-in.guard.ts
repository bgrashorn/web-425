/**
 * Title: sign-in.guard.ts
 * Author: Brett Grashorn
 * Date: June 11 2023
 * Description: Sign in guard file
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {


  constructor(private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
