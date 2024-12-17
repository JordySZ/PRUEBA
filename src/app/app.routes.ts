import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';


import { FORMULARIOComponent } from './formulario/formulario.component';
import { CARRUCELComponent } from './carrucel/carrucel.component';
import { GALERIAComponent } from './galeria/galeria.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
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
