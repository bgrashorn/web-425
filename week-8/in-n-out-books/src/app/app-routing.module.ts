/*
    ========================================================================================================================
    ; Title: app-routing.module.ts
    ; Author: Brett Grashorn
    ; Date: 6/27/23
    ; Description: Routing Module
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.2 - Output Properties
    Course GitHub
    ========================================================================================================================
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  }, 
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
