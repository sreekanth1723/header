import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { EnvironmentComponent } from './environment/environment.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'environment',component:EnvironmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
