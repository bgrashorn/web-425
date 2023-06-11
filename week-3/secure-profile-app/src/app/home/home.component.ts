/**
 * Title: home.component.ts
 * Author: Brett Grashorn
 * Date: June 11 2023
 * Description: Home component file
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: Boolean;

  constructor(private route: ActivatedRoute) { 
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
