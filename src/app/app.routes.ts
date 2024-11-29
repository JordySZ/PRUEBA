import { Routes, RouterModule } from '@angular/router';

import { Deber2Component } from './deber2/deber2.component';
import { Deber3Component } from './deber3/deber3.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

import { Tres } from './DEBER 2/3x3/user.component';
import { Cuatro } from './DEBER 2/4x4/user.component';
import { Cinco } from './DEBER 2/5x5/user.component';
import { Seis } from './DEBER 2/6x6/user.component';

export const routes: Routes = [

    {path:'DEBER3', component:Deber2Component},
    {path:'DEBER4', component:Deber3Component},
    {path:'home', component:HomeComponent}, 
    { path: '3x3',component: Tres},
    { path: '4x4',component: Cuatro},
    { path: '5x5',component: Cinco},
    { path: '6x6',component: Seis}
  
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}