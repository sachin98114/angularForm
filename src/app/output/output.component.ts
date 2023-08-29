import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  
  @Output () start=new EventEmitter;
  getval(){
    this.start.emit({name:"yuvi" , weaight:"102kg"})
  }
}