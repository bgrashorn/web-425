/*
    ========================================================================================================================
    ; Title: wishlist.component.ts
    ; Author: Brett Grashorn
    ; Date: 6/27/23
    ; Description: Wishlist  component
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.2 - Output Properties
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
