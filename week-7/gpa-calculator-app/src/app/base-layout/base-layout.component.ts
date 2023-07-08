/*
    ========================================================================================================================
    ; Title: base-layout.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 7/7/23
    ; Description: Base Layout component file
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.3 - Layouts
    Instructions - Assignment 6.4 - Input Properties
    Instructions - Exercise 7.2 - Reactive Forms
    Instructions - Exercise 7.3 - Form Validation
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;
  constructor(private cookieService: CookieService, private router: Router) { 
    this.assignment = 'GPA Calculator';
  }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in'])
  }

}
