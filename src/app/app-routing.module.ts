import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { UmfrageComponent } from './pages/umfrage/umfrage.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'umfrage', component:UmfrageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
