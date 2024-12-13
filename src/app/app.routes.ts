import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Deber2Component } from './DEBER 3/deber3.component';
import { Deber3Component } from './DEBER 4/deber4.component';
import { HomeComponent } from './home/home.component';

import { Tres } from './DEBER 2/3x3/user.component';
import { Cuatro } from './DEBER 2/4x4/user.component';
import { Cinco } from './DEBER 2/5x5/user.component';
import { Seis } from './DEBER 2/6x6/user.component';
import { FORMULARIOComponent } from './formulario/formulario.component';
import { CARRUCELComponent } from './carrucel/carrucel.component';
import { GALERIAComponent } from './galeria/galeria.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'DEBER3', component: Deber2Component },
  { path: 'DEBER4', component: Deber3Component },
  { path: '3x3', component: Tres },
  { path: '4x4', component: Cuatro },
  { path: '5x5', component: Cinco },
  { path: '6x6', component: Seis },
  { path: 'formulario', component: FORMULARIOComponent },
  { path: 'carrucel', component: CARRUCELComponent },
  { path: 'GALERIA', component: GALERIAComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
