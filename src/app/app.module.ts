import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import {RouterModule} from '@angular/router';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShapesComponent } from './shapes/shapes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShapesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      {path:"login",component:LoginComponent},
      {path:"shapes",component:ShapesComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
