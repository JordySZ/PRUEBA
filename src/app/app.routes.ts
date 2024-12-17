import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';


import { FORMULARIOComponent } from './formulario/formulario.component';
import { login } from './login/carrucel.component';
import { juegos } from './juegos/galeria.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'formulario', component: FORMULARIOComponent },
  { path: 'login', component: login },
  { path: 'juegos', component: juegos },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
