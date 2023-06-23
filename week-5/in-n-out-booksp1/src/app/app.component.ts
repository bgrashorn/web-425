/*
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 6/22/23
    ; Description: App component file
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 5.1 - Navigation and Layout
    Course GitHub
    ========================================================================================================================
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.2 - Navigation and Layout'
}
  
}
