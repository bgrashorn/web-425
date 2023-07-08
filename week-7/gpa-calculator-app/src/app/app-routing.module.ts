/*
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Brett Grashorn
    ; Bellevue University
    ; Date: 7/6/23
    ; Description: app routing file
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.3 - Layouts
    Instructions - Exercise 7.2 - Reactive Forms
    Course GitHub
    ========================================================================================================================
 */ 

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInGuard } from './sign-in.guard';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ],
    canActivate: [SignInGuard]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: "sign-in",
        component: SignInComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
