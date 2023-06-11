/**
 * Title:app.component.ts
 * Author: Brett Grashorn
 * Date: June 11 2023
 * Description: App component file
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  assignment: string = 'Exercise 2.3 - Data Binding';
}
