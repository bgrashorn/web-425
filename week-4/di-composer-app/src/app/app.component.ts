/**
 * Title:app.component.ts
 * Author: Brett Grashorn
 * Date: June 13 2023
 * Description: App component file
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.2 - Inversion of Control and Dependecy Injection';
}
