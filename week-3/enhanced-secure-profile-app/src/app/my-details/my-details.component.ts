/**
 * Title:my-deatils.component.component.ts
 * Author: Brett Grashorn
 * Date: June 11 2023
 * Description: My details component File
 */

import { Component, OnInit } from '@angular/core';

export default class Person {

  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript, #2023, #CodingWithAngular, #ngOmaha"
  ];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(`\n Full Name: ${this.fullName}\n Favorite Food: ${this.favoriteFood}\n Favorite Color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Brett Grashorn", "Chicken Wings", "Blue");
   }

  ngOnInit(): void {
  }

}
