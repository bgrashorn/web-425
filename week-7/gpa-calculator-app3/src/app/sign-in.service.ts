/*
    ========================================================================================================================
    ; Title: sign-in.service.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 7/6/23
    ; Description: Sign in service file
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.3 - Layouts
    Instructions - Exercise 7.2 - Reactive Forms
    Course GitHub
    ========================================================================================================================
 */ 

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }

   validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
   } 
}
