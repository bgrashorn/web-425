/*
    ========================================================================================================================
    ; Title: base-layout.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 6/27/23
    ; Description: Base Layout component file
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.3 - Layouts
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;
  constructor() { 
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {
  }

}
