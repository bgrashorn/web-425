/*
    ========================================================================================================================
    ; Title: wishlist-create.component.ts
    ; Author: Brett Grashorn
    ; Date: 6/27/23
    ; Description: Wishlist create component
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.2 - Output Properties
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
   }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
  })

  this.item = {} as IWishlistItem;
  }

}
