import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
@Output () start=new EventEmitter;
hide:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  
  getval(){
    this.start.emit({name:"yuvi" , gfname:"varsha❤️"})
    this.hide=!this.hide;
  }
  color(){
    this.hide=!this.hide;
  }
  arr=["sachin","deepak","ashish","ashutosh","barun","tarun","amit","narayan"]
}
