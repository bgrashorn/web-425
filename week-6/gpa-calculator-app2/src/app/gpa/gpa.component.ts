/*
    ========================================================================================================================
    ; Title: gpa.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 6/29/23
    ; Description: GPA component with Input property
    ; Work Cited:
    Coding Guidelines
    Instructions - Assignment 6.4 - Input Properties
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;
 
  constructor() { }

  ngOnInit(): void {
  }

}
