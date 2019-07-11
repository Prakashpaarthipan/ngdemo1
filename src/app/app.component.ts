import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private router: Router) {}
  title = 'This is my First Angular App';
  total = function(a:number,b:number){
    return a*b;
  }
  Amount:number = this.total(5,6);
  items = [
    { value: "0", view: "zero" },
    { value: "1", view: "one" },
    { value: "2", view: "Two" }
  ];
 
  gotoHome() :void{
    this.router.navigate(['/login']);  // define your component where you want to go
    
}
}
