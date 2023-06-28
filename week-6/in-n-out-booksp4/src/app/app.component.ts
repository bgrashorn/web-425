/*
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 6/27/23
    ; Description: App component file
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.2 - Output Properties
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
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1'
}
  
}
