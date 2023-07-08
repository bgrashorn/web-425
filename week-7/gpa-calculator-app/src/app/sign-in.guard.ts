/*
    ========================================================================================================================
    ; Title: sign-in.guard.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 7/6/23
    ; Description: Sign in guard file
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 7.2 - Reactive Forms
    Course GitHub
    ========================================================================================================================
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      const sessionUser = this.cookieService.get('session_user');

      if (sessionUser) {
        return true;
      } else {
        this.router.navigate(['/session/sign-in']);
        return false;
      }
  }
  
}
