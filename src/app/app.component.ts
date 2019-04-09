import { Component } from '@angular/core';
//import {ROUTER_DIRECTIVES,RouteConfig} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})




export class AppComponent {
  title = 'Project1';
  router: any;

  navigate() {
    this.router.navgateURL(['/shapes']);
 }

}
