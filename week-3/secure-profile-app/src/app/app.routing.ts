/**
 * Title:app.routing.ts
 * Author: Brett Grashorn
 * Date: June 11 2023
 * Description: Routing file
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SigninComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
]