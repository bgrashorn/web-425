/*
    ========================================================================================================================
    ; Title: sign-in.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 7/6/23
    ; Description: app routing file
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 7.2 - Reactive Forms
    Course GitHub
    ========================================================================================================================
 */ 

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ''
    })
  }

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'This Student ID you entered is invalid, please try again.';
    }
  }
}
