import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/secure.guard';

import { PiecesComponent } from './pieces/pieces.component';


const routes: Routes = [
  {path : "pieces" , component : PiecesComponent, canActivate:[AuthGuard], data : {roles:['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
