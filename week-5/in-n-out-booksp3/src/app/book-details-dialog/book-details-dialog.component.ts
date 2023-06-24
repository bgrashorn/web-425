/*
    ========================================================================================================================
    ; Title: app-routing.module.ts
    ; Author: Brett Grashorn
    ; Date: 6/23/23
    ; Description: Book Detials Dialog box components
    ; Work Cited:
    Coding Guidelines
    Instructions - Instructions - Asignment 5.4 - Dialogs
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';


@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
   }

  ngOnInit(): void {
  }

}
