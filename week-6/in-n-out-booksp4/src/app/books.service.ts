/*
    ========================================================================================================================
    ; Title: books.service.ts
    ; Author: Brett Grashorn
    ; Date: 6/23/23
    ; Description: Books Service file
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 5.3 - Data Tables
    Course GitHub
    ========================================================================================================================
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780141346885',
        title: 'The Last Olympian',
        description: 'In the final installment of the Percy Jackson series, Percy finally comes face to face with Kronos to try and save Olympus.',
        numOfPages: 381,
        authors: ['Rick Riordan']
      },
      {
        isbn: '9781982158248',
        title: 'This Bright Future: A Memoir',
        description: "In this memoir, Bobby Hall, better known by his stage name Logic, details everything from his childhood to his rap career and the anxiety and mental illness that he dealt with along the way.",
        numOfPages: 384,
        authors: ['Bobby Hall']
      },
      {
        isbn: '9780786838653',
        title: 'The Lightning Thief',
        description: "In the first installment of the Percy Jackson series, Percy finally finds out who is real dad is and what adventures go along with that information.",
        numOfPages: 416,
        authors: ['Rick Riordan']
      },
      {
        isbn: '9871250077936',
        title: "I'm Fascinated by Sacrifice Flies",
        description: "Writer and Reporter Tim Kurkjian retells many stories and shares countless fun statistics for the game he loves to follow.",
        numOfPages: 432,
        authors: ['Tim Kurkjian']
      },
      {
        isbn: '9780571363858',
        title: 'When Stars are Scatterd',
        description: "In this graphic novel, refugee Omar Mohammed retells his life and his journey to get himself and his disabled brother to America for a better life.",
        numOfPages: 264,
        authors: ['Omar Mohammed', 'Victoria Jamieson']
      }
    ]
   }

   getBooks(): Observable<IBook[]> {
    return of(this.books);
   }

   getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
   }
}
