import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.less']
})
export class ShapesComponent implements OnInit {
  ngOnInit(): void {
  }
  imagename: string;
  imageurl : String;
  constructor(private router: Router) { 
    
    
  }
  onClick(){
    this.router.navigateByUrl("assets/img/2062652.jpg");


  }

  
//(shape: any) {
  showImage(shape){
    switch(shape){
     // case 'circle': this.imageurl = 'assets/img/2062652.jpg';
     case 'circle': this.imageurl = 'https://s3.amazonaws.com/devnewt/circle.png'
    }
   
  }

  showImage1(shape){
switch (shape){
//  case 'square': this.imageurl = 'assets/img/index.png';
case 'square': this.imageurl = 'https://s3.amazonaws.com/devnewt/square.png'
}
  }


  // showImage2(shape: any){
  //   switch (shape){
  //     case 'triangle': this.imageurl = 'assets/img/index.jpeg';
  //   }
  //     }

 // ngOnInit() {
  //}

  // onShapeChange(){
  //   this.imagename = "2062652.jpg"
  // }


}