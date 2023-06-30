/*
    ========================================================================================================================
    ; Title: base-layout.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 6/29/23
    ; Description: Base Layout component file
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.3 - Layouts
    Instructions - Assignment 6.4 - Input Properties
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
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {
  }

}
