import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
Username: any;
Password:any;
  constructor(private router: Router, private service : ApiService) { }
  funcLogin(){
    console.log(this.Username)
    let reqObj = {
      username : this.Username,
	    password : this.Password
    }
    this.service.login(reqObj).subscribe((res) => {
      if(res.statusCode == 200){
this.router.navigateByUrl("shapes")

      }
      else{
        alert(res.userName)
      }
    })
   this.router.navigateByUrl("shapes");
  }

  ngOnInit() {
    console.log('Hello')

  }
  
}



