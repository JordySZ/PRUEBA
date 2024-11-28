import { Routes, RouterModule } from '@angular/router';

import { Deber2Component } from './deber2/deber2.component';
import { Deber3Component } from './deber3/deber3.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [

    {path:'deber2', component:Deber2Component},
    {path:'deber3', component:Deber3Component}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}