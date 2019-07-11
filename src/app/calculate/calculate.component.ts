import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  
  public number1 :number;
  public number2 :number;
  public result :number;
  constructor() { }

  ngOnInit() {
  }
  public add(){
    this.result = this.number1 + this.number2;
  }
}
