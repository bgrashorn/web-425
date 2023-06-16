/**
 * Title:composer.service.ts
 * Author: Brett Grashorn
 * Date: June 15 2023
 * Description: Composer Service file
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;
  
  
   
  constructor() {

      this.composers = [
          {
              composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
          },
          {
              composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
          },
          {
              composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
          },
          {
              composerId: 103, fullName: "Johannes Brahms", genre: "Classical"
          },
          {
              composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
          },
      ]
}



getComposers(): Observable<IComposer[]> {
return of(this.composers);
}

getComposer(composerId: number) {
for (let composer of this.composers) {
  if (composer.composerId === composerId) {
      return composer;
  }
        }
    }

// filter function added per assignment 4.4 - filters an array of composers 
filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe
    (map(composers =>
        composers.filter(composer =>
            composer.fullName.toLowerCase().indexOf(name) > -1)))
        }
}


