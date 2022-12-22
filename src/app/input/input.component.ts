import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
@Input () result: string |undefined;

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(_changes: SimpleChanges): void {
    console.log("::::::",this.result);
  }
  handleClick(e:any){
    console.log(":: event",e)
  }
}
