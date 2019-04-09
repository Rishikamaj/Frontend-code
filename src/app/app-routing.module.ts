import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShapesComponent } from './shapes/shapes.component';


// const routes: Routes = [];
const appRoutes:Routes=[
  {path: '', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'shapes', component:ShapesComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [LoginComponent,ShapesComponent]
