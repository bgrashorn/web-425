/*
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 6/29/23
    ; Description: Home component file
    ; Work Cited:
    Coding Guidelines
    Instructions - Assignment 6.4 - Input Properties
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A','A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> =[];
  gpaTotal: number = 0;

  constructor() { 
    this.transcriptEntry = {} as ITranscript;
  }


  ngOnInit(): void {
  }

  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      console.log(entry.grade);
      switch(entry.grade) {
        case 'A':
          console.log("It's an A")
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.70;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C':
          gpa += 2.00;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        case 'F':
          gpa += 0.00;
          break;
      }
    }

    this.gpaTotal = gpa/this.transcriptEntries.length;

  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
