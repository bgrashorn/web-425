/*
    ========================================================================================================================
    ; Title: grade-summary.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 6/29/23
    ; Description: Grade summary component with Input properties
    ; Work Cited:
    Coding Guidelines
    Instructions - Assignment 6.4 - Input Properties
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit, Input } from '@angular/core';
  

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
